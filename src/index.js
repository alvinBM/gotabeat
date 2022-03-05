import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/** Import bootstrap and required CSS modules */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/main.css'


import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
