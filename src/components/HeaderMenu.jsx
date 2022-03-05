import React from "react";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import "../assets/styles/header.css";

/** Declaration de du Composant fonction  HeaderMenu*/
const HeaderMenu = ({ page }) => {
    /** Recuperation de state global */
    // const userInStore = useSelector((state) => state.user.user_data);

    /** En remplacement du componentDidMount de Composant classe */
    React.useEffect(() => {
        // console.log("Component mounted with user in store : ", userInStore);
    }, []);

    return (
        <div className="header">
            <div className="header-left">
                <img
                    className="img-fluid"
                    src={require("../assets/images/logo.png")}
                    width={200}
                    alt="profil"
                />
            </div>
            <div className="header-middle">
                <div className="input-group">
                    {/* <input
                        type="text"
                        className="form-control search-form"
                        placeholder="Search for an instrument"
                    /> */}
                </div>
            </div>
            <div className="header-rigth">
                <span className="item-menu itemMenuActive">Beat-Makers</span>
                <span className="item-menu">Beat-Users</span>
                <span className="item-menu">Pricing</span>
                <span className="item-menu">Licenses</span>
                <span className="item-menu">About Us</span>
                <span className="item-menu">Contact</span>
                <span className="brand-logo pl-3">
                    <IoSearchOutline
                        className="cursor-pointer secondary-color"
                        color={"#f1f1f1"}
                        size={26}
                    />
                </span>
            </div>
        </div>
    );
};

export default HeaderMenu;
