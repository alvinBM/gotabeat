import React from "react";
import { IoHeartOutline, IoListCircleOutline } from "react-icons/io5";

const PlayList = ({ tracks, selectedTrack, setSelectedTrack }) => {
    return (
        <div className="playlist">
            {tracks.map((track) => (
                <div
                    key={track.id}
                    className={
                        track.id === selectedTrack.id
                            ? "playlist-item selected"
                            : "playlist-item"
                    }
                    onClick={() => setSelectedTrack(track)}
                >
                    <img
                        className="img-fluid"
                        style={{ objectFit: "cover" }}
                        src={track.cover}
                        width={60}
                        alt="track"
                    />
                    <div className="bloc-title">
                        <span className="tilte">{track.title}</span>
                        <span>Producer : {track.producer}</span>
                    </div>
                    <div className="bloc-action">
                        <span>
                            <IoHeartOutline
                                className="cursor-pointer secondary-color"
                                color={"#f5e4dc"}
                                size={20}
                            />
                        </span>

                        <span>
                            <IoListCircleOutline
                                className="cursor-pointer secondary-color"
                                color={"#f5e4dc"}
                                size={20}
                            />
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PlayList;
