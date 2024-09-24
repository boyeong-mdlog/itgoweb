import React, {useRef, useState, useEffect} from "react";
import oneVideo from "../res/images/video_1.mp4";
import twoVideo from "../res/images/video_2.mp4";
import {MainSvgOne, MainSvgTwo, MainSvgThree, MainLogo} from "../components/svg/MainSvg";
import HomeTabContent from "./HomeTabContent";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

let vidx = 0;
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

const contents= [
    {
        type: 'video',
        component: videoSource[vidx].source,
        title: '화물을 넘어, 사람과 사람을 이어주는',
        subtitle: '혁신적인 디지털 주선 업무와 맞춤형 스마트 배차 플랫폼',
        duration: videoSource[vidx].duration,
    },
    {
        type: 'svg',
        component: <MainSvgOne />,
        title: '차주님에게 필요한',
        subtitle: '여러 화물도 한 번에',
        duration: 5000,
    },
    {
        type: 'svg',
        component: <MainSvgTwo />,
        title: '화물 등록에서 배차, 운임료 지급까지',
        subtitle: '간편 화물 주선 토탈 관리',
        duration: 5000,
    },
    {
        type: 'svg',
        component: <MainSvgThree />,
        title: '전화는 그만',
        subtitle: '앱에서 보는 실시간 화물 트래킹',
        duration: 5000,
    },
]

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

    const [currentIndex, setCurrentIndex] = useState(0);

    const onVideoEnded = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    };


    const mainMedia = useRef();
    const mainText = useRef();


    useEffect(()=>{
        const updateTop = setTimeout(()=>{
            setCurrentIndex(currentIndex >= contents.length - 1 ? 0 : currentIndex+1);
            UpdateContent();
        },contents[currentIndex].duration);
        return () => clearTimeout(updateTop);

    },[currentIndex]);

    const UpdateContent = () => {
        if(contents[currentIndex].type === "video") {
            vidx === 1 ? vidx = 0 : vidx = 1;
            contents[currentIndex].component = videoSource[vidx].source;
            contents[currentIndex].duration = videoSource[vidx].duration;
        }
    }
    useGSAP(
        () =>{
            gsap.from('.main-video-title', {
                scrollTrigger: {
                    trigger: '.introduction-main',
                    once: true,
                    markers: false,
                },
                ease: 'power3.out',
                duration: 0.7,
                opacity: 0,
                y: 20,
            })
            gsap.from('.main-video-subtitle', {
                scrollTrigger: {
                    trigger: '.introduction-main',
                    once: true,
                    markers: false,
                },
                ease: 'power3.out',
                delay: 5.2,
                duration: 0.7,
                opacity: 0,
                y: 10,
            })

            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.introduction-main',
                    once: true,
                    markers: false,
                },
            })
            t1.from('.logo_first_text', {
                ease: 'power3.out',
                delay: 1.2,
                duration: 0.6,
                opacity: 0,
                x: -30,
                scale: 1.05,
            })
            t1.from('.logo_second_text', {
                ease: 'power3.out',
                delay: 0.3,
                duration: 0.6,
                opacity: 0,
                y: -20,
                scaleY: 1.1,
            })
            t1.from('.logo_third_text', {
                ease: 'power3.out',
                delay: 0.3,
                duration: 0.6,
                opacity: 0,
                y: 5,
                scale: 1.2,
            })
            t1.from('.logo_fourth_two', {
                ease: 'power3.out',
                delay: 0.3,
                duration: 0.6,
                opacity: 0,
                x: -30,
                scale: 1.05,
            })
            t1.from('.logo_magenta_text', {
                ease: 'power3.out',
                delay: 0.2,
                duration: 0.8,
                opacity: 0,
                x: 10,
                y: -10,
                scale: 1.05,
            })

            gsap.from('.logo_fourth_one', {
                scrollTrigger: {
                    trigger: '.introduction-main',
                    once: true,
                    markers: false,
                },
                ease: 'power3.out',
                delay: 4.1,
                duration: 0.5,
                opacity: 0,
                x: 10,
                y: -10,
                scale: 1.1,
            })
        },{scope: mainText}
    );



    return (
        <div id="introduction">
            <div className="introduction-main">
                <div className="introduction-media" ref={mainMedia}>
                    {contents[currentIndex].type === 'video' ? (
                        <video
                            key={`${currentIndex}-video`}
                            autoPlay
                            muted
                            playsInline
                            preload="auto"
                            onEnded={onVideoEnded}
                        >
                            <source src={contents[currentIndex].component} type="video/mp4"/>
                        </video>
                    ) : contents[currentIndex].type === 'svg' ? (
                        <>{contents[currentIndex].component}</>
                    ) : null}
                </div>
                <div className="introduction-main-text" ref={mainText}>
                    {contents[currentIndex].type === 'video' ? (
                        <>
                            <div className="main-video-title">{contents[currentIndex].title}</div>
                            <div className="main-logo">
                                <MainLogo />
                            </div>
                            <div className="main-video-subtitle">
                                {contents[currentIndex].subtitle}
                            </div>
                        </>
                    ) : contents[currentIndex].type === 'svg' ? (
                        <>
                            <div className="main-svg-title">{contents[currentIndex].title}</div>
                            <div className="main-svg-subtitle">
                                {contents[currentIndex].subtitle}
                            </div>
                        </>
                    ): null}
                </div>
            </div>
            <HomeTabContent/>
        </div>

    );
}

export default Home;