import React from 'react';
import ReactDOM from 'react-dom/client';
import { PostDataProvider } from './components/context';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PostDataProvider>
      <App />
    </PostDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);


