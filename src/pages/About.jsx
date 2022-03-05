import HeaderMenu from "../components/HeaderMenu";

const About = () => {
    return (
        <div className="body">
            <HeaderMenu page={"home"} />
            <div className="body-content" style={{display : 'flex', justifyContent : 'center'}}>

                <h1>About us</h1>

            </div>
        </div>
    );
};

export default About;
