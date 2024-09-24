import React, {useRef} from "react";
import {FirstIcon, FirstContent,SecondIcon,SecondContent} from "../components/svg/CallerSvg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const tabContents = [
    {
        icon : <FirstIcon />,
        title: '실시간 화물 트래킹',
        description: `전화로 매번 확인하지 않아도 앱을 통해
          실시간으로 화물 트래킹 가능`,
        motions : <FirstContent />
    },
    {
        icon: <SecondIcon />,
        title: '여러 화물도 한 번에',
        description: `배송 중인 여러 화물의 위치 및
					상하차 현황을 확인하고 인수증까지 확인 가능`,
        motions:  <SecondContent />,
    },
];

function HomeCallerContent() {
    const tabcont = useRef();
    useGSAP(
        () =>{
            // 첫 번째
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
            });
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

            const s1 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 60%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
            })
            s1.to('.first_shipper_shadow', {
                ease: 'power2',
                delay: 2.4,
                duration: 0.5,
                opacity: 0,
            })
            s1.to('.first_shipper_shadow', {
                delay: 0.1,
                duration: 1.5,
                opacity: 1,
            })
            gsap.to('.first_shipper_phone_middle', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.7,
                duration: 0.5,
                opacity: 1,
            })
            const pathElement = document.getElementById(
                'first_shipper_phone_middle_road',
            )
            if (pathElement instanceof SVGPathElement) {
                const path = pathElement
                const length = path.getTotalLength()

                path.style.strokeDasharray = length.toString()
                path.style.strokeDashoffset = '0'

                const t1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.first_shipper_shadow',
                        start: 'top 60%',
                        end: 'bottom center',
                        once: true,
                        markers: false,
                    },
                })
                t1.to(path, {
                    ease: 'power2',
                    delay: 2.8,
                    duration: 0.8,
                    opacity: 1,
                })
                t1.to(path, {
                    ease: 'power2.inOut',
                    duration: 5.8,
                    strokeDashoffset: (-length).toString(),
                })
            }
            gsap.to('.first_shipper_phone_middle_chapter_three', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 8.8,
                duration: 1,
                opacity: 1,
            })
            gsap.to('.first_shipper_phone_middle_chapter_two', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 3.6,
                duration: 0.5,
                opacity: 1,
            })
            gsap.to('.first_shipper_phone_middle_chapter_two', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 8.8,
                duration: 1,
                opacity: 0,
            })
            gsap.to('.first_shipper_phone_middle_chapter_one', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.7,
                duration: 0.5,
                opacity: 1,
            })
            gsap.to('.first_shipper_phone_middle_chapter_one', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 3.6,
                duration: 0.5,
                opacity: 0,
            })
            const t2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 60%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
            })
            t2.to('.first_shipper_phone_middle_truck', {
                ease: 'power2',
                delay: 2.8,
                duration: 0.4,
                opacity: 1,
            })
            t2.to('.first_shipper_phone_middle_truck', {
                delay: 0.1,
                opacity: 1,
            })
            t2.to('.first_shipper_phone_middle_truck', {
                ease: 'power1.inOut',
                delay: 0.2,
                duration: 1,
                x: 18,
                y: 55,
            })
                .to('.first_shipper_phone_middle_truck', {
                    ease: 'power1.inOut',
                    duration: 0.5,
                    rotate: 30,
                    transformOrigin: '50% 50%',
                })
                .to('.first_shipper_phone_middle_truck', {
                    ease: 'power1.inOut',
                    duration: 1.5,
                    transformOrigin: '50% 50%',
                    x: -40,
                    y: 220,
                })
                .to('.first_shipper_phone_middle_truck', {
                    ease: 'power1.inOut',
                    duration: 0.8,
                    rotate: 160,
                    transformOrigin: '50% 50%',
                    x: -55,
                    y: 200,
                })
                .to('.first_shipper_phone_middle_truck', {
                    ease: 'power1.inOut',
                    duration: 0.8,
                    rotate: 100,
                    transformOrigin: '50% 50%',
                    x: -85,
                    y: 200,
                })

            const t3 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 60%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
            })
            t3.to('.first_shipper_phone_middle_truck_info', {
                ease: 'power2',
                delay: 2.8,
                duration: 0.4,
                opacity: 1,
            })
            t3.to('.first_shipper_phone_middle_truck_info', {
                delay: 0.1,
                opacity: 1,
            })
            t3.to('.first_shipper_phone_middle_truck_info', {
                ease: 'power1.inOut',
                delay: 0.2,
                duration: 1,
                x: 18,
                y: 55,
            })
                .to('.first_shipper_phone_middle_truck_info', {
                    ease: 'power1.inOut',
                    duration: 0.5,
                })
                .to('.first_shipper_phone_middle_truck_info', {
                    ease: 'power1.inOut',
                    duration: 1.5,
                    transformOrigin: '50% 50%',
                    x: -40,
                    y: 220,
                })
                .to('.first_shipper_phone_middle_truck_info', {
                    ease: 'power1.inOut',
                    duration: 0.8,
                    transformOrigin: '50% 50%',
                    x: -55,
                    y: 200,
                })
                .to('.first_shipper_phone_middle_truck_info', {
                    ease: 'power1.inOut',
                    duration: 0.8,
                    transformOrigin: '50% 50%',
                    x: -85,
                    y: 200,
                })
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: '.first_shipper_shadow',
                        start: 'top 50%',
                        end: 'bottom center',
                        once: true,
                        markers: false,
                    },
                    transformOrigin: '50% 50%',
                })
                .from('.first_shipper_phone_front_pointer', {
                    ease: 'power2',
                    delay: 0.5,
                    duration: 1,
                })
                .to('.first_shipper_phone_front_pointer', {
                    ease: 'power2',
                    duration: 0.3,
                    scale: 0.8,
                })
                .to('.first_shipper_phone_front_pointer', {
                    ease: 'power2',
                    duration: 0.3,
                    scale: 1,
                })
            gsap.to('.first_shipper_phone_front', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.3,
                duration: 1,
                opacity: 0,
                x: -70,
            })
            gsap.to('.first_shipper_phone_front_truck_three', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.3,
                duration: 1,
                opacity: 0,
                x: -70,
            })
            gsap.to('.first_shipper_phone_front_truck_two', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.3,
                duration: 1,
                opacity: 0,
                x: -70,
            })
            gsap.to('.first_shipper_phone_front_truck_one', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.3,
                duration: 1,
                opacity: 0,
                x: -70,
            })
            gsap.to('.first_shipper_phone_front_truck_three_info', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.3,
                duration: 1,
                opacity: 0,
                x: -70,
            })
            gsap.to('.first_shipper_phone_front_truck_two_info', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.3,
                duration: 1,
                opacity: 0,
                x: -70,
            })
            gsap.to('.first_shipper_phone_front_truck_one_info', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.3,
                duration: 1,
                opacity: 0,
                x: -70,
            })
            gsap.to('.first_shipper_phone_front_pointer', {
                scrollTrigger: {
                    trigger: '.first_shipper_shadow',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 2.3,
                duration: 1,
                opacity: 0,
                x: -70,
            })

            // 두 번째
            gsap.from('.tab-contents:nth-child(2) .tab-contents-text svg', {
                scrollTrigger: {
                    trigger: '.tab-contents:nth-child(2) .tab-contents-text',
                    start: 'top 75%',
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
                    start: 'top 75%',
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
                    start: 'top 75%',
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

            const t4 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.second_shipper_phone_back',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
            })
            const t5 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.second_shipper_phone_back',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
            })
            const t6 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.second_shipper_phone_back',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
            })
            const t7 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.second_shipper_phone_back',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
            })
            const t8 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.second_shipper_phone_back',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
            })

            t4.to('.second_shipper_card_one', {
                ease: 'power1.inOut',
                duration: 0.5,
                opacity: 1,
            })
                .to('.second_shipper_card_one', {
                    ease: 'power1.inOut',
                    delay: 1,
                    duration: 0.5,
                    y: '+=89',
                })
                .to('.second_shipper_card_one', {
                    ease: 'power1.inOut',
                    delay: 1,
                    duration: 0.5,
                    y: '+=89',
                })
                .to('.second_shipper_card_one', {
                    ease: 'power1.inOut',
                    delay: 1,
                    duration: 0.5,
                    y: '+=89',
                })
                .to('.second_shipper_card_one', {
                    ease: 'power1.inOut',
                    delay: 1,
                    duration: 0.5,
                    y: '+=89',
                })

            t5.to('.second_shipper_card_two', {
                ease: 'power1.inOut',
                delay: 1.5,
                duration: 0.5,
                opacity: 1,
            })
                .to('.second_shipper_card_two', {
                    ease: 'power1.inOut',
                    delay: 1,
                    duration: 0.5,
                    y: '+=89',
                })
                .to('.second_shipper_card_two', {
                    ease: 'power1.inOut',
                    delay: 1,
                    duration: 0.5,
                    y: '+=89',
                })
                .to('.second_shipper_card_two', {
                    ease: 'power1.inOut',
                    delay: 1,
                    duration: 0.5,
                    y: '+=89',
                })

            t6.to('.second_shipper_card_three', {
                ease: 'power1.inOut',
                delay: 3,
                duration: 0.5,
                opacity: 1,
            })
                .to('.second_shipper_card_three', {
                    ease: 'power1.inOut',
                    delay: 1,
                    duration: 0.5,
                    y: '+=89',
                })
                .to('.second_shipper_card_three', {
                    ease: 'power1.inOut',
                    delay: 1,
                    duration: 0.5,
                    y: '+=89',
                })

            t7.to('.second_shipper_card_four', {
                ease: 'power1.inOut',
                delay: 4.5,
                duration: 0.5,
                opacity: 1,
            }).to('.second_shipper_card_four', {
                ease: 'power1.inOut',
                delay: 1,
                duration: 0.5,
                y: '+=89',
            })

            t8.to('.second_shipper_card_five', {
                ease: 'power1.inOut',
                delay: 5.5,
                duration: 0.5,
                opacity: 1,
            })

            gsap.from('.second_shipper_phone_background', {
                scrollTrigger: {
                    trigger: '.second_shipper_phone_back',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 6.5,
                duration: 1.5,
                opacity: 0,
            })
            gsap.from('.second_shipper_bill', {
                scrollTrigger: {
                    trigger: '.second_shipper_phone_back',
                    start: 'top 50%',
                    end: 'bottom center',
                    once: true,
                    markers: false,
                },
                ease: 'power2',
                delay: 7.5,
                duration: 1,
                opacity: 0,
                x: 50,
            })
        },
        {scope:tabcont}
    );
    return (
        <>
            <div className="introduction-tab-inner" ref={tabcont}>
                {tabContents.map((value, index) => {
                    return (
                        <div className="tab-contents" key={index}>
                            <div className="tab-contents-text">
                                {tabContents[index].icon}
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

export default HomeCallerContent;