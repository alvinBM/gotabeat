/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AudioPlayer from "../components/AudioPlayer";
import PlayList from "../components/PlayList";
import HeaderMenu from "../components/HeaderMenu";
import "../assets/styles/home.css";
import "../assets/styles/audioPlayer.css";

const tracks = [
    {
        id: 0,
        title: "A Buck And Change Inst",
        url: "https://adafevm.com/audios/A Buck And Change Inst.mp3",
        cover: require("../assets/images/instrumental/i5.jpg"),
        producer : "Alvin Bauma"
    },
    {
        id: 1,
        title: "Darwins Acid Instrumental MASTER",
        url: "https://adafevm.com/audios/Darwins Acid Instrumental MASTER.mp3",
        cover: require("../assets/images/instrumental/i2.jpg"),
        producer : "Marc BTM"
    },
    {
        id: 2,
        title: "Dead Poets INST",
        url: "https://adafevm.com/audios/Dead Poets INST.mp3",
        cover: require("../assets/images/instrumental/i1.jpg"),
        producer : "John Swagg"
    },
    {
        id: 3,
        title: "Fame In The Game Instr Master",
        url: "https://adafevm.com/audios/Fame In The Game Instr Master.mp3",
        cover: require("../assets/images/instrumental/i8.jpg"),
        producer : "50 cent"
    },
    {
        id: 4,
        title: "GOCASE Instr Master",
        url: "https://adafevm.com/audios/GOCASE Instr Master.mp3",
        cover: require("../assets/images/instrumental/i6.jpg"),
        producer : "Alvin bauma"
    },
    {
        id: 5,
        title: "Group Selection Instrumental MASTER",
        url: "https://adafevm.com/audios/Group Selection Instrumental MASTER.mp3",
        cover: require("../assets/images/instrumental/i7.jpg"),
        producer : "50 cent"
    },
    {
        id: 6,
        title: "P F R Instrumental MASTER",
        url: "https://adafevm.com/audios/P F R Instrumental MASTER.mp3",
        cover: require("../assets/images/instrumental/i3.jpg"),
        producer : "50 cent"
    },
    {
        id: 7,
        title: "Stirling Engine Instrumental Master 03_11_2021",
        url: "https://adafevm.com/audios/Stirling Engine Instrumental Master 03_11_2021.mp3",
        cover: require("../assets/images/instrumental/i4.jpg"),
        producer : "Alvin bauma"
    },
    {
        id: 8,
        title: "Twin Studies Instr Master",
        url: "https://adafevm.com/audios/Twin Studies Instr Master.mp3",
        cover: require("../assets/images/instrumental/i9.jpg"),
        producer : "50 cent"
    },
];

/** Declaration de du Composant fonction  HeaderMenu*/
const Home = () => {
    /**Decalration du state local de mon composant [nomState, fonctionDeMiseAJour] */
    const [count, setCount] = React.useState(0);
    const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

    /** Recuperation de state global */
    const userInStore = useSelector((state) => state.user.user_data);

    /** En remplacement du componentDidMount de Composant classe */
    React.useEffect(() => {
        console.log("Component mounted with count : ", count);
        console.log("User in store", userInStore);
    }, []);

    /** En remplacement du componentUpdated de Composant classe */
    React.useEffect(() => {
        console.log("Component updated with count : ", count);
        document.title = "Got A Beat ";
    });

    /** En remplacement du componentUnMounted de Composant classe */
    React.useEffect(() => {
        return () => {
            console.log("Component unmounted with count : ", count);
        };
    });

    const next = () => {
        const nextTrack = tracks.find( elm => elm.id === selectedTrack.id + 1);
        if(nextTrack) {
            setSelectedTrack(nextTrack)
        }
    }

    const prev = () => {
        const prevTrack = tracks.find( elm => elm.id === selectedTrack.id - 1);
        if(prevTrack) {
            setSelectedTrack(prevTrack)
        }
    }

    return (
        <div className="home">
            <HeaderMenu page={"home"} />

            <div className="body-content home-content row">
                <div className="col">
                    <PlayList
                        tracks={tracks}
                        selectedTrack={selectedTrack}
                        setSelectedTrack={setSelectedTrack}
                    />
                </div>
                <div className="col-1"></div>
                <div
                    className="col-4"
                    style={{ padding: 0}}
                >
                    <img
                        className="img-fluid"
                        src={selectedTrack.cover}
                        width={'100%'}
                        alt="profil"
                    />
                    <br/>
                    <br/>
                    <h6>{selectedTrack.title}</h6>
                    <p>Producer : {selectedTrack.producer}</p>
                    <span>Date : 02 March 22</span>
                </div>
            </div>

            <div className="audio-player-contenair">
                <AudioPlayer url={selectedTrack.url} id={selectedTrack.id} nextElement={next} prevElement={prev} />
            </div>
            <br />
        </div>
    );
};

/**Declarations d'autres fonctions */
// function disHello(nom){
//     alert("Bonjour " + nom);
// }

export default Home;
