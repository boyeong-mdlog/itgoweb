import React, {useRef} from "react";
import {FirstIcon, FirstContent,SecondIcon,SecondContent,ThirdIcon,ThirdContent} from "../components/svg/BrokerSvg";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const tabContents = [
    {
        icon : <FirstIcon />,
        title: '스마트한 배차 관리',
        description: `직영・지입 및 일반 차량을 상황에 맞게
          배분할 수 있는 시스템`,
        motions : <FirstContent />
    },
    {
        icon: <SecondIcon />,
        title: '운임료 선지급',
        description: `카드 오더로 화물 등록 시
          화물잇고에서 차주님에게 다음 날 운임료 선지급 (준비중)`,
        motions:  <SecondContent />,
    },
    {
        icon: <ThirdIcon />,
        title: '토탈 주선 업무 지원 솔루션',
        description: `프로그램 설치 없이 웹에서
          인수증 관리, 운임료 지급, 계산서 발행 등`,
        motions: <ThirdContent />
    },
];


function HomeBrokerContent() {
    const tabcont = useRef();
    useGSAP(
        () =>{
            // 첫 번째
            gsap.from('.tab-contents:nth-child(1) .tab-contents-text > svg', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(1) .tab-contents-text',
                    start: 'top 70%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.from('.tab-contents:nth-child(1) .tab-contents-text h2', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(1) .tab-contents-text',
                    start: 'top 70%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.from('.tab-contents:nth-child(1) .tab-contents-text p', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(1) .tab-contents-text',
                    start: 'top 70%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 0.3,
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.from('.tab-contents:nth-child(1) .tab-motion', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(1)',
                    start: 'top 60%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 0.5,
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.from('.first_brokerage_truck', {
                scrollTrigger: {
                    trigger: '.first_brokerage_web',
                    start: 'top 60%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 1.5,
                duration: 1,
                opacity: 0,
                x: 60,
                y: -30,
            })
            gsap.from('.first_brokerage_web_screen', {
                scrollTrigger: {
                    trigger: '.first_brokerage_web',
                    start: 'top 60%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.5,
                duration: 1,
                opacity: 0,
                y: -20,
            })

            // 두 번째
            gsap.from('.tab-contents:nth-child(2) .tab-contents-text > svg', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(2) .tab-contents-text',
                    start: 'top 73%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.from('.tab-contents:nth-child(2) .tab-contents-text h2', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(2) .tab-contents-text',
                    start: 'top 73%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.from('.tab-contents:nth-child(2) .tab-contents-text p', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(2) .tab-contents-text',
                    start: 'top 73%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 0.3,
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.from('.tab-contents:nth-child(2) .tab-motion', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(2)',
                    start: 'top 68%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 0.5,
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.to('.second_brokerage_card_purple', {
                scrollTrigger: {
                    trigger: '.second_brokerage_web',
                    start: 'top 60%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 1,
                duration: 0.6,
                x: 60,
                transformOrigin: '25% 25%',
                rotate: 1,
            })
            gsap.to('.second_brokerage_card_grey', {
                scrollTrigger: {
                    trigger: '.second_brokerage_web',
                    start: 'top 60%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 1,
                duration: 0.6,
                transformOrigin: '75% 75%',
                rotate: 1,
            })

            // 세 번째
            gsap.from('.tab-contents:nth-child(3) .tab-contents-text > svg', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(3) .tab-contents-text',
                    start: 'top 85%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.from('.tab-contents:nth-child(3) .tab-contents-text h2', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(3) .tab-contents-text',
                    start: 'top 85%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.from('.tab-contents:nth-child(3) .tab-contents-text p', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(3) .tab-contents-text',
                    start: 'top 85%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 0.3,
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.from('.tab-contents:nth-child(3) .tab-motion', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(3)',
                    start: 'top 80%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 0.5,
                duration: 1,
                opacity: 0,
                y: 70,
            })
            gsap.from('.third_brokerage_graph', {
                scrollTrigger: {
                    trigger: '.third_brokerage_web',
                    start: 'top 60%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 1,
                duration: 1,
                opacity: 0,
                x: -100,
            })
            gsap.from('.third_brokerage_web_view', {
                scrollTrigger: {
                    trigger: '.third_brokerage_web',
                    start: 'top 60%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power4',
                delay: 2,
                duration: 1,
                opacity: 0,
                scale: 0,
                transformOrigin: '80% 80%',
            })
        },
        {scope:tabcont}
    );
    return (
        <>
            <div className="introduction-tab-inner" ref={tabcont}>
                {tabContents.map((value,index)=>{
                    return (
                        <div className="tab-contents">
                            <div className="tab-contents-text">
                                <div>{tabContents[index].icon}</div>
                                <h2>{tabContents[index].title}</h2>
                                <p>{tabContents[index].description}</p>
                            </div>
                            <div className="tab-motion">
                                {tabContents[index].motions}
                            </div>
                        </div>
                    )

                })}
            </div>
        </>
    )
}

export default HomeBrokerContent;