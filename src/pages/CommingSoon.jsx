/* eslint-disable react/jsx-no-target-blank */
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

import "../assets/styles/commingSoon.css";

const CommingSoon = () => {
    return (
        <div className="body">
            <div className="comming-soon">

                <img
                    className="img-fluid logo"
                    src={require("../assets/images/logo.png")}
                    width={200}
                    alt="profil"
                />

                <h1 className="">WE'RE COMING SOON</h1>
                
                <p>Easy beat licensing for all uses. Producers get paid, artists get heard.</p>




                <div className="socials">
                    <span>
                        <a target="_blank" href="https://www.facebook.com/EventRapInc/">
                            <IoLogoFacebook
                                className="cursor-pointer secondary-color"
                                color={"#f5e4dc"}
                                size={30}
                            />
                        </a>
                    </span>
                    <span>
                        <a target="_blank" href="https://www.linkedin.com/company/event-rap">
                            <IoLogoLinkedin
                                className="cursor-pointer secondary-color"
                                color={"#f5e4dc"}
                                size={30}
                            />
                        </a>
                    </span>
                    <span>
                        <a target="_blank" href="https://twitter.com/EventRapInc">
                        <IoLogoTwitter
                            className="cursor-pointer secondary-color"
                            color={"#f5e4dc"}
                            size={30}
                        />
                        </a>
                    </span>
                </div>

                <div className="bottom">
                    <p>Brought to you by Event Rap</p>
                    <img
                        className="img-fluid"
                        src={require("../assets/images/eventrap.png")}
                        width={120}
                        alt="profil"
                    />
                </div>
            </div>
        </div>
    );
};

export default CommingSoon;
