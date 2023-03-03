import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App';
import client from './graphql';
import Theme from './themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Theme>
        <CssBaseline>
          <App />
        </CssBaseline>
      </Theme>
    </ApolloProvider>
  </React.StrictMode>,
);
