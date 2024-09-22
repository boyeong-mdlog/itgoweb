import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import HomeDriverContent from "./HomeDriverContent";
import HomeBrokerContent from "./HomeBrokerContent";
import HomeCallerContent from "./HomeCallerContent";


function HomeTabContent(){
    const [tabValue, setTabValue] = useState("1")
    const tabSort = (idx) =>{
        setTabValue(idx);
        switch (idx) {
            case 1 :
                setTabContent(<HomeDriverContent />);
                break;
            case 2 :
                setTabContent(<HomeBrokerContent />);
                break;
            case 3 :
                setTabContent(<HomeCallerContent />);
                break;
            default :
                setTabContent(<HomeDriverContent />);
                break;
        }
    }
    const [tabContent, setTabContent] = useState(<HomeDriverContent />)
    const [subLink, setSubLink] = useSearchParams();
    useEffect(()=>{
        switch (subLink.get("subTitle")) {
            case "intro-driver" :
                tabSort(1);
                setTabContent(<HomeDriverContent />);
                break;
            case "intro-broker" :
                tabSort(2);
                setTabContent(<HomeBrokerContent />);
                break;
            case "intro-caller" :
                tabSort(3);
                setTabContent(<HomeCallerContent />);
                break;
            default :
                tabSort(1);
                setTabContent(<HomeDriverContent />);
        }
    },[]);


    return (
        <>
            <div className="introduction-tab">
                <div className={`itgoWebTab setTab_${tabValue}`}>
                    <button onClick={() => tabSort(1)}>차주</button>
                    <button onClick={() => tabSort(2)}>주선사</button>
                    <button onClick={() => tabSort(3)}>화주</button>
                    <div className="indicate"></div>
                </div>
            </div>
            {tabContent}
        </>
    )
}

export default HomeTabContent;