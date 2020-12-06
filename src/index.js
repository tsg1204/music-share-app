import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { ApolloProvider } from '@apollo/client';
import theme from './theme';
import createApolloClient from './graphql/client';

const client = createApolloClient();

ReactDOM.render(
    <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </MuiThemeProvider>
    </ApolloProvider>

    , document.getElementById('root'));

