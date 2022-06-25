import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {ThemeProvider} from "styled-components";
import App from './App';
import {Provider} from "react-redux";
import store from "./BLL/store";
import {device} from "./theme/device";
import {Global} from "./theme/global";


const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <ThemeProvider theme={device}>
        <Global/>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>
);