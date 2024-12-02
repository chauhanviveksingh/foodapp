import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import router from './router/Router';
import AuthProvider from "./contexts/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
    //<RouterProvider router={router}>
       // <App />
    //</RouterProvider>
);


reportWebVitals();
