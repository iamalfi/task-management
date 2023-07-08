import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import Video from "./Video";
// import video1 from "../assets/video1.mp4";

function Home() {
    return (
        <>
            <Video />
        </>
    );
}
export default Home;

const backgroundImage = {
    // backgroundImage: `url(${}})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    color: "white",
};
