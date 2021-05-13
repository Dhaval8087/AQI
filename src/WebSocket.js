import React, { createContext } from 'react';
import { useDispatch } from 'react-redux';

import { WS_BASE } from './config';
import { airQualityDataSuccess } from './redux/actions/airquality';

const WebSocketContext = createContext(null)

export { WebSocketContext }

const WebSocketWrapper = ({ children }) => {
    const webSocketFactory = {
        connectionTries: 3,
        connect: function (url) {
            var ws = new WebSocket(url);
            ws.addEventListener("error", e => {
                // readyState === 3 is CLOSED
                if (e.target.readyState === 3) {
                    this.connectionTries--;

                    if (this.connectionTries > 0) {
                        setTimeout(() => this.connect(url), 5000);
                    } else {
                        throw new Error("Maximum number of connection trials has been reached");
                    }

                }
            });
            return ws;
        }
    };
    const dispatch = useDispatch();
    var webSocket = webSocketFactory.connect(WS_BASE);

    const ws = webSocket;

    ws.onmessage = evt => {
        // listen to data sent from the websocket server
        const message = JSON.parse(evt.data);

        dispatch(airQualityDataSuccess({ airData: message, date: new Date() }));

    }
    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}
export default WebSocketWrapper
