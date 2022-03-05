/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact page</h1>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Contact;
