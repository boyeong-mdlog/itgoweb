import React, {useState} from "react";
import mainVideo from "../res/images/video_1.mp4";

function Home() {
    const [tabValue, setTabValue] = useState("1")
    const tabSort = (idx) =>{
        setTabValue(idx);
    }
    return (
        <div id="introduction">
            <div className="introduction-main">
                <div className="introduction-media">
                    <video autoPlay={true} muted={true} playsInline={true} preload="true" loop={true}>
                        <source src={mainVideo} type="video/mp4"/>
                    </video>
                </div>
                <div className="introduction-main-text">
                    <div>
                    </div>
                </div>
            </div>
            <div className="introduction-tab">
                <div className={`tab-title setTab_${tabValue}`}>
                    <button onClick={() =>tabSort(1)}>차주</button>
                    <button onClick={() =>tabSort(2)}>주선사</button>
                    <button onClick={() =>tabSort(3)}>화주</button>
                    <div className="indicate"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;