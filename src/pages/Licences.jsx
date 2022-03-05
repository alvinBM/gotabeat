import HeaderMenu from "../components/HeaderMenu";

const Licences = () => {
    return (
        <div className="body">
            <HeaderMenu page={"licences"} />
            <div
                className="body-content"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <h1 className="mt-5">
                    Get Your <b>Music Plan</b>.
                </h1>

                <p>
                    Need new music? You’ve got options. Purchase your
                    PremiumBeat tracks à la carte, or activate your Monthly
                    Subscription to save over 70%.
                </p>

                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div
                                style={{ height: 500 }}
                                className="card-body d-flex justify-content-center align-items-center flex-column"
                            >
                                <h1 style={{ color: "#e64619", fontSize: 30 }}>
                                    <b>Single Use</b>
                                </h1>
                                
                                <p className="card-text text-center">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore...
                                </p>

                                

                                <h1 className="card-title"><b>99.99 $</b> <span style={{fontSize : 20}}>/ monthly</span></h1>

                                <p className="text-center">
                                    All downloads include full tracks, loops,
                                    stems, and shorts. Premium License and some
                                    tracks not included in subscription.
                                </p>

                                <button className="button button-secondary mr-2">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <div
                                style={{ height: 500 }}
                                className="card-body d-flex justify-content-center align-items-center flex-column"
                            >
                                <h1 style={{ color: "#1fb8a8", fontSize: 30 }}>
                                    <b>Non-Exclusive License</b>
                                </h1>
                                
                                <p className="card-text text-center">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore...
                                </p>

                                

                                <h1 className="card-title"><b>59.99 $</b> <span style={{fontSize : 20}}>/ monthly</span></h1>

                                <p className="text-center">
                                    All downloads include full tracks, loops,
                                    stems, and shorts. Premium License and some
                                    tracks not included in subscription.
                                </p>

                                <button className="button button-secondary mr-2">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <div
                                style={{ height: 500 }}
                                className="card-body d-flex justify-content-center align-items-center flex-column"
                            >
                                <h1 style={{ color: "#d6d32f", fontSize: 30 }}>
                                    <b>Exclusive License</b>
                                </h1>
                                
                                <p className="card-text text-center">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore...
                                </p>

                                

                                <h1 className="card-title"><b>29.99 $</b> <span style={{fontSize : 20}}>/ monthly</span></h1>

                                <p className="text-center">
                                    All downloads include full tracks, loops,
                                    stems, and shorts. Premium License and some
                                    tracks not included in subscription.
                                </p>

                                <button className="button button-secondary mr-2">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Licences;
