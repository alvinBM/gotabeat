import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
                <Link to="/" className={`item-menu ${page === 'home' ? "itemMenuActive" : ""}`}>Beat-Makers</Link>
                <Link to="/beat-user" className={`item-menu ${page === 'beat-user' ? "itemMenuActive" : ""}`}>Beat-Users</Link>
                {/* <Link to="/pricing" className={`item-menu ${page === 'pricing' ? "itemMenuActive" : ""}`}>Pricing</Link> */}
                <Link to="/licences" className={`item-menu ${page === 'licences' ? "itemMenuActive" : ""}`}>Licenses</Link>
                <Link to="/about" className={`item-menu ${page === 'about' ? "itemMenuActive" : ""}`}>About Us</Link>
                <Link to="/contact" className={`item-menu ${page === 'contact' ? "itemMenuActive" : ""}`}>Contact</Link>
                <Link to="/search" className="brand-logo pl-3">
                    <IoSearchOutline
                        className="cursor-pointer secondary-color"
                        color={"#f1f1f1"}
                        size={26}
                    />
                </Link>
            </div>
        </div>
    );
};

export default HeaderMenu;
