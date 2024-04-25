import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import IntegratedMenuDrawer from './components/IntegratedMenuDrawer.jsx';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <IntegratedMenuDrawer />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    childeren: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/',
        element: <App />
      },
      {
        path: '/',
        element: <App />
      },
      {
        path: '/',
        element: <App />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
