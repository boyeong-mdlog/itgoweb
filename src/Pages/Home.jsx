import React, {useState, useLayoutEffect, useRef, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import oneVideo from "../res/images/video_1.mp4";
import twoVideo from "../res/images/video_2.mp4";
import {MainSvgOne, MainSvgTwo, MainSvgThree} from "../components/svg/MainSvg";
import HomeTabContent from "./HomeTabContent";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

let vidx = 0;
let midx = 0;

const videoSource = [
    {
        source : oneVideo,
        duration : 10000,
    },
    {
        source: twoVideo,
        duration: 15000,
    }
]

const topMainContent= [
    {
        type: 'video',
        source: videoSource[vidx],
        title: '화물을 넘어, 사람과 사람을 이어주는',
        subtitle: '혁신적인 디지털 주선 업무와 맞춤형 스마트 배차 플랫폼',
        duration: videoSource[vidx],
    },
    {
        type: 'svg',
        component: MainSvgOne,
        title: '차주님에게 필요한',
        subtitle: '여러 화물도 한 번에',
        duration: 5000,
    },
    {
        type: 'svg',
        component: MainSvgTwo,
        title: '화물 등록에서 배차, 운임료 지급까지',
        subtitle: '간편 화물 주선 토탈 관리',
        duration: 5000,
    },
    {
        type: 'svg',
        component: MainSvgThree,
        title: '전화는 그만',
        subtitle: '앱에서 보는 실시간 화물 트래킹',
        duration: 5000,
    },
]
gsap.registerPlugin(useGSAP, ScrollTrigger);

const MainInit = () => {
    return (
        <></>
    )
}

function updateContent() {
    midx++;
    if(midx > topMainContent.length) {midx = 0;}
    vidx++;
    if(vidx === 3) {vidx =0;}
}
function Home() {


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


    return (
        <div id="introduction">
            <div className="introduction-main">
                <div className="introduction-media">
                    <MainInit />
                </div>
                <div className="introduction-main-text">
                </div>
            </div>
            <HomeTabContent />
        </div>

    );
}

export default Home;