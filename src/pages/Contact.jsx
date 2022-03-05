import HeaderMenu from "../components/HeaderMenu";

const Contact = () => {
    return (
        <div className="body">
            <HeaderMenu page={"contact"} />
            <div className="body-content" style={{display : 'flex', justifyContent : 'center'}}>

                <h1 className="mt-5">Contact Page</h1>

            </div>
        </div>
    );
};

export default Contact;
