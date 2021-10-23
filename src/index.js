import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from "react-router-dom";
import axios from 'axios'
import LocalStorageService from './services/localStorageService';
import { toast } from 'react-toastify';
import AuthService from './services/authService';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
const localStorage = new LocalStorageService();
const authService = new AuthService();

axios.interceptors.request.use(
  function (successfulReq) {
    const token = localStorage.getItem("token");
    const expiration = localStorage.getItem("expiration");
    if (token) {
      console.log(expiration - Date.now());
      if (expiration - Date.now() > 2000) {
        successfulReq.headers['Authorization'] = 'Bearer ' + token;
        successfulReq.headers['Accept'] = 'application/json';
      } else {
        console.log("Token süresi dolmuş.");
      }
    }
    return successfulReq;
  },
  function (error) {
    return Promise.reject(error);
  }
);
setInterval(function () {
  let expiry = localStorage.getItem("expiration");
  if (expiry - Date.now() < 180001) {
    authService.renewtoken().then((p) => {
      let result = p.data;
      console.log(result);
      if (result.success) {
        const json = JSON.stringify(result.data.expiration);
        const parsed = JSON.parse(json);
        const dateMilliseconds = new Date(parsed).getTime();
        localStorage.addItem("token", result.data.token);
        localStorage.addItem("expiration", dateMilliseconds);
        localStorage.addItem("type", result.data.userType);
        //toast.info("Tokeniniz yenilendi");
      } else {
        toast.error("Token yenilenirken bir hata ile karşılaştık");
      }
    })
  }
}, 60000);
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
