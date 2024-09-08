import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import * as auth from "../../../src/utils/auth";

function onRegister({ email, password }) {
    auth
        .register(email, password)
        .then((res) => {
            setTooltipStatus("success");
            setIsInfoToolTipOpen(true);
            history.push("/signin");
        })
        .catch((err) => {
            setTooltipStatus("fail");
            setIsInfoToolTipOpen(true);
        });
}

function onLogin({ email, password }) {
    auth
        .login(email, password)
        .then((res) => {
            setIsLoggedIn(true);
            setEmail(email);
            history.push("/");
        })
        .catch((err) => {
            setTooltipStatus("fail");
            setIsInfoToolTipOpen(true);
        });
}

function onSignOut() {
    // при вызове обработчика onSignOut происходит удаление jwt
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    // После успешного вызова обработчика onSignOut происходит редирект на /signin
    history.push("/signin");
}

const App = () => (
  <div className="container">
    <div>Name: auth</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)