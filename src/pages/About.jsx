import HeaderMenu from "../components/HeaderMenu";

const About = () => {
    return (
        <div className="body">
            <HeaderMenu page={"about"} />
            <div className="body-content" style={{display : 'flex', justifyContent : 'center'}}>

                <h1 className="mt-5">About us</h1>

            </div>
        </div>
    );
};

export default About;
