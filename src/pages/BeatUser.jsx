import HeaderMenu from "../components/HeaderMenu";

const BeatUser = () => {
    return (
        <div className="body">
            <HeaderMenu page={"beat-user"} />
            <div className="body-content" style={{display : 'flex', justifyContent : 'center'}}>

                <h1 className="mt-5">BeatUser page</h1>

            </div>
        </div>
    );
};

export default BeatUser;
