/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";

import {
    IoPlaySkipBackCircleSharp,
    IoPlaySkipForwardCircleSharp,
    IoPauseCircleSharp,
    IoPlayCircleSharp,
    IoHeartOutline,
    IoListCircleOutline,
} from "react-icons/io5";

import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = (ref) => ({
    container: ref,
    waveColor: "#eee",
    progressColor: "OrangeRed",
    cursorColor: "OrangeRed",
    barWidth: 3,
    barRadius: 3,
    responsive: true,
    height: 70,
    // If true, normalize by the maximum peak instead of 1.0.
    normalize: true,
    // Use the PeakCache to improve rendering speed of large waveforms.
    partialRender: true,
});

export default function AudioPlayer({ url, id, nextElement, prevElement }) {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [playing, setPlay] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [loaded, setLoaded] = useState(false);

    // create new WaveSurfer instance
    // On component mount and when url changes
    useEffect(() => {
        setPlay(false);

        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);

        wavesurfer.current.load(url);

        wavesurfer.current.on("ready", function () {
            // https://wavesurfer-js.org/docs/methods.html
            // wavesurfer.current.play();
            // setPlay(true);

            // make sure object stillavailable when file loaded
            if (wavesurfer.current) {
                wavesurfer.current.setVolume(volume);
                setVolume(volume);
                setPlay(true);
                wavesurfer.current.play();
                setLoaded(true);
            }
        });

        // Removes events, elements and disconnects Web Audio nodes.
        // when component unmount
        return () => wavesurfer.current.destroy();
    }, [url]);

    const handlePlayPause = () => {
        setPlay(!playing);
        wavesurfer.current.playPause();
    };

    const onVolumeChange = (e) => {
        const { target } = e;
        const newVolume = +target.value;

        if (newVolume) {
            setVolume(newVolume);
            wavesurfer.current.setVolume(newVolume || 1);
        }
    };

    return (
        <div>

            <div id="waveform" ref={waveformRef}  />

            <div className="controls">
                <div className="actions-volume">
                    <span>
                        <IoHeartOutline
                            className="cursor-pointer secondary-color"
                            color={"#f5e4dc"}
                            size={30}
                        />
                    </span>

                    <span>
                        <IoListCircleOutline
                            className="cursor-pointer secondary-color"
                            color={"#f5e4dc"}
                            size={30}
                        />
                    </span>

                    <span style={{marginRight : 10}}></span>

                    <input
                        type="range"
                        id="volume"
                        name="volume"
                        // waveSurfer recognize value of `0` same as `1`
                        //  so we need to set some zero-ish value for silence
                        min="0.01"
                        max="1"
                        step=".025"
                        onChange={onVolumeChange}
                        defaultValue={volume}
                    />
                </div>

                <div className="actions">
                    <span onClick={() => prevElement()}>
                        <IoPlaySkipBackCircleSharp
                            className="cursor-pointer secondary-color"
                            color={"#f5e4dc"}
                            size={40}
                        />
                    </span>
                    <div onClick={handlePlayPause}>
                        {!playing ? (
                            <IoPlayCircleSharp
                                className="cursor-pointer secondary-color"
                                color={"OrangeRed"}
                                size={70}
                            />
                        ) : (
                            <IoPauseCircleSharp
                                className="cursor-pointer secondary-color"
                                color={"OrangeRed"}
                                size={70}
                            />
                        )}
                    </div>
                    <span onClick={() => nextElement()}>
                        <IoPlaySkipForwardCircleSharp
                            className="cursor-pointer secondary-color"
                            color={"#f5e4dc"}
                            size={40}
                        />
                    </span>
                </div>

                <div className="actions-download">
                    <button className="button button-secondary mr-2">
                        Download
                    </button>
                    <button className="button button-primary">Licence</button>
                </div>
            </div>
        </div>
    );
}
