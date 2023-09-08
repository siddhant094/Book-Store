import React from 'react';
import { inject } from '@vercel/analytics';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

inject();

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <SnackbarProvider>
            <App />
        </SnackbarProvider>
    </BrowserRouter>
);
