import { Alert, AlertTitle } from '@material-ui/lab';
import React, { Component } from 'react';


const Fallback = React.memo(() => (

    <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Something went wrong
    </Alert>
))

export default class ErrorBoundary extends Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    render() {
        return this.state.hasError ? <Fallback /> : this.props.children;
    }
}