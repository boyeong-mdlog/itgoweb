import React, {useRef} from "react";
import {FirstIcon, FirstContent,SecondIcon,SecondCont,ThirdIcon,ThirdCont} from "../components/svg/DriverSvg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const tabContents = [
    {
        icon : <FirstIcon />,
        title: '최적의 화물 배차',
        description: `차량 톤수, 화물 종류, 상하차지, 운임료 분석을 통한
          최적의 화물 배차 추천`,
        motions : <FirstContent />
    },
    {
        icon: <SecondIcon />,
        title: '화물차 전용 내비',
        description: `업계 최초 화물차 전용 내비게이션을 통해
          최적의 운송 경로 안내`,
        motions:  <SecondCont />,
    },
    {
        icon: <ThirdIcon />,
        title: '운송료 익일 정산 보장',
        description: `카드 오더라면 다음 날 낮 12시까지
          운임료 정산 가능 (준비 중)`,
        motions: <ThirdCont />
    },
];

function HomeDriverContent() {
    const tabcont = useRef();
    useGSAP(
        () =>{
            gsap.from('.tab-contents:nth-child(1) .tab-contents-text svg', {
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
                    start: 'top 50%',
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
            gsap.from('.first_driver_truck', {
                scrollTrigger: {
                    trigger: '.first_driver_phone',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 1,
                duration: 1,
                opacity: 0,
                x: 50,
                y: -30,
            })
            gsap.from('.first_driver_shadow', {
                scrollTrigger: {
                    trigger: '.first_driver_phone',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                duration: 1,
                opacity: 0.2,
            })


            gsap.from('.tab-contents:nth-child(2) .tab-contents-text > svg', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(2) .tab-contents-text',
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
            gsap.from('.tab-contents:nth-child(2) .tab-contents-text h2', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(2) .tab-contents-text',
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
            gsap.from('.tab-contents:nth-child(2) .tab-contents-text p', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(2) .tab-contents-text',
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
            gsap.from('.tab-contents:nth-child(2) .tab-motion', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(2)',
                    start: 'top 45%',
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
            gsap.to('.second_driver_phone_back', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 3.5,
                duration: 0.5,
                opacity: 0,
            })
            gsap.to('.second_driver_phone_back_road', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 3.5,
                duration: 0.5,
                opacity: 0,
            })
            gsap.to('.second_driver_phone_back_camera', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 3.5,
                duration: 0.5,
                opacity: 0,
            })

            const pathElement = document.getElementById(
                'second_driver_phone_middle_road',
            )
            if (pathElement instanceof SVGPathElement) {
                const path = pathElement
                const length = path.getTotalLength()

                path.style.strokeDasharray = length.toString()
                path.style.strokeDashoffset = length.toString()
                gsap.to(path, {
                    scrollTrigger: {
                        trigger: '.second_driver_shadow',
                        start: 'top 60%',
                        end: 'bottom center',
                        once: true,
                        markers: false,
                    },
                    ease: 'power1.inOut',
                    delay: 1.5,
                    duration: 2.5,
                    strokeDashoffset: 0,
                })
            }
            gsap.to('.second_driver_phone_front', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 4,
                duration: 0.5,
                opacity: 1,
            })
            gsap.to('.second_driver_phone_front_road', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 4,
                duration: 0.5,
                opacity: 1,
            })
            gsap.to('.second_driver_phone_front_truck', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 4,
                duration: 0.5,
                opacity: 1,
            })
            gsap.to('.second_driver_phone_front_truck', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power1',
                delay: 4,
                duration: 10,
                y: -30,
            })
            gsap.to('.second_driver_phone_front_camera', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 4,
                duration: 0.5,
                opacity: 1,
            })
            gsap.to('.second_driver_phone_front_tone', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 6.5,
                duration: 1,
                opacity: 1,
            })
            gsap.to('.second_driver_phone_front_height', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 4.3,
                duration: 1,
                opacity: 1,
            })
            gsap.to('.second_driver_phone_front_info_one', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 4.3,
                duration: 1.3,
                opacity: 1,
                y: 5,
            })
            gsap.to('.second_driver_phone_front_info_one', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 6.3,
                duration: 0.5,
                opacity: 0,
            })
            gsap.to('.second_driver_phone_front_info_two', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 6.5,
                duration: 1.3,
                opacity: 1,
                y: 5,
            })
            gsap.to('.second_driver_phone_front_info_two', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 8.5,
                duration: 0.5,
                opacity: 0,
            })
            gsap.to('.second_driver_phone_front_info_three', {
                scrollTrigger: {
                    trigger: '.second_driver_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 8.7,
                duration: 1.3,
                opacity: 1,
                y: 5,
            })

            gsap.from('.tab-contents:nth-child(3) .tab-contents-text > svg', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(3) .tab-contents-text',
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
            gsap.from('.tab-contents:nth-child(3) .tab-contents-text h2', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(3) .tab-contents-text',
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
            gsap.from('.tab-contents:nth-child(3) .tab-contents-text p', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(3) .tab-contents-text',
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
            gsap.from('.tab-contents:nth-child(3) .tab-motion', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(3)',
                    start: 'top 50%',
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
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: '.third_driver_phone',
                        start: 'top 50%',
                        end: 'bottom center',
                        once: true,
                        markers: false,
                    },
                    transformOrigin: '50% 50%',
                })
                .from('.third_driver_pointer', {
                    ease: 'power2',
                    delay: 0.3,
                    duration: 1,
                    scale: 1,
                })
                .to('.third_driver_pointer', {
                    ease: 'power2',
                    duration: 0.6,
                    x: -20,
                    y: 41.5,
                })
                .to('.third_driver_pointer', {
                    ease: 'power2',
                    duration: 0.2,
                    delay: 0.5,
                    scale: 0.8,
                })
                .to('.third_driver_pointer', {
                    ease: 'power2',
                    duration: 0.2,
                    scale: 1,
                })
                .to('.third_driver_pointer', {
                    ease: 'power2',
                    duration: 0.6,
                    delay: 0.5,
                    x: 0,
                    y: 0,
                })
                .to('.third_driver_pointer', {
                    ease: 'power2',
                    duration: 0.2,
                    delay: 0.5,
                    scale: 0.8,
                })
                .to('.third_driver_pointer', {
                    ease: 'power2',
                    duration: 0.2,
                    scale: 1,
                })
            gsap.from('.third_driver_phone_screen', {
                scrollTrigger: {
                    trigger: '.third_driver_phone',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.7,
                duration: 1,
                opacity: 0,
            })
            gsap.from('.third_driver_bill', {
                scrollTrigger: {
                    trigger: '.third_driver_phone',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 4.5,
                duration: 1,
                x: 60,
                opacity: 0,
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

export default HomeDriverContent;