import React, {useState, useLayoutEffect, useRef} from "react";
import oneVideo from "../res/images/video_1.mp4";
import twoVideo from "../res/images/video_2.mp4";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Home() {
    const [tabValue, setTabValue] = useState("1")
    const tabSort = (idx) =>{
        setTabValue(idx);
    }

    let scrollTop;
    window.addEventListener(
        "scroll",
        function () {
            scrollTop = window.scrollY;
            if (scrollTop === 0) {
                document.querySelector("#wrap").classList.add("transTop");
                document.querySelector("#wrap").classList.remove("blackTop");
                document.querySelector("#wrap").classList.remove("whiteTop");
            }
            else if (scrollTop > 6 && scrollTop < 900) {
                document.querySelector("#wrap").classList.add("blackTop");
                document.querySelector("#wrap").classList.remove("whiteTop");
                document.querySelector("#wrap").classList.remove("transTop");
            }
            else {
                document.querySelector("#wrap").classList.add("whiteTop");
                document.querySelector("#wrap").classList.remove("blackTop");
                document.querySelector("#wrap").classList.remove("transTop");
            }
        },
        { passive: true }
    );

    const main = useRef();

    useGSAP(
        () => {
            const boxes = gsap.utils.toArray('.box');
            boxes.forEach((box) => {
                gsap.to(box, {
                    x: 150,
                    scrollTrigger: {
                        trigger: box,
                        start: 'bottom bottom',
                        end: 'top 20%',
                        scrub: true,
                        // markers: true,
                    },
                });
            });
        },
        { scope: main }
    );


    return (
        <div id="introduction">
            <div className="introduction-main">
                <div className="introduction-media">
                    <video autoPlay={true} muted={true} playsInline={true} preload="true" loop={true}>
                        <source src={oneVideo} type="video/mp4"/>
                    </video>
                </div>
                <div className="introduction-main-text">
                    <div>
                    </div>
                </div>
            </div>
            <div className="introduction-tab">
                <div className={`itgoWebTab setTab_${tabValue}`}>
                    <button onClick={() =>tabSort(1)}>차주</button>
                    <button onClick={() =>tabSort(2)}>주선사</button>
                    <button onClick={() =>tabSort(3)}>화주</button>
                    <div className="indicate"></div>
                </div>
            </div>
            <div>
                <div ref={main}>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                    <div className="box">Box</div>
                </div>
            </div>
        </div>

    );
}

export default Home;