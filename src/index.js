import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from "./components/app";
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
