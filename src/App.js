import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';

import ErrorBoundary from './errorboundary';
import { store } from './redux';
import { Routes } from './routes/routes';
import theme from './theme';
import WebSocketProvider from './WebSocket';

const App = () => {
  return (
    <Provider store={store}>
      <WebSocketProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </ThemeProvider>
      </WebSocketProvider>
    </Provider>

  );
}

export default App;
