import React from "react";
import ReactDOM from "react-dom/client";
import { Global } from "@emotion/react";
import App from "./App";
import { global } from "./styles/global";
import { store } from './store/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <Global styles={global} />
    <App />
    </Provider>
  </React.StrictMode>
);
