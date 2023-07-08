import React from "react";
import video1 from "../assets/video2.mp4";

function Video() {
    return (
        <div>
            <video style={videoStyle} autoPlay muted loop>
                <source src={video1} type="video/mp4" />{" "}
            </video>
        </div>
    );
}

export default Video;
const videoStyle = {
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    position: "fixed",
    zIndex: -1,
    top: 0,
    left: 0,
};
