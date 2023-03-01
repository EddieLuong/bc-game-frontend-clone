import React from 'react';
import ReactDOM from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';

import App from './App';
import Theme from './themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
      <CssBaseline>
        <App />
      </CssBaseline>
    </Theme>
  </React.StrictMode>,
);
