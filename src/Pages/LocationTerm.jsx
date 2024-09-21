import React, {useState} from "react";
import LocationTerm231018 from "./LocationTerm231018";

const selectDate = ["2023년 10월 18일"];

function LocationTerm() {
    const [selDate, setSelDate] = useState(0);
    const handleChangeDate = (option) => {
        setSelDate(option)
    }
    const [selOpen, setSelOpen] = useState("close");
    const SelectOpen = () => {
        selOpen === "close" ? setSelOpen("open") : setSelOpen("close")
    }

    const loadPage = (selDate) => {
        switch (selDate) {
            case 0 :
                return <LocationTerm231018 />;
            default :
                return <></>
        }
    }

    return (
        <>
            <div id="terms" className="terms-container">
                <div id="termsCont">
                    <div className="terms-title">
                        <h2>위치기반 서비스 이용약관</h2>
                        <div className={`terms-select ${selOpen}`} onClick={SelectOpen}>
                            <span id="terms-date-select">{selectDate[selDate]}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g id="bt_top_back_n" transform="translate(-13 37.189) rotate(-90)">
                                    <rect id="guude" width="24" height="24" transform="translate(13.19 13)"
                                          fill="none"></rect>
                                    <path id="chevron_left"
                                          d="M11.347,13.891l5.3-5.228L15.615,7.648,9.293,13.891l6.322,6.251,1.027-1.014Z"
                                          transform="translate(12.128 10.529)" fill="#2f2f2f"
                                          fill-rule="evenodd"></path>
                                </g>
                            </svg>
                            <div className="terms-date-select-option">
                                <ul>
                                    {selectDate.map((value, index) => {
                                        return (
                                            <li className={selDate === index && "selected"}
                                                onClick={() => handleChangeDate(index)}>{selectDate[index]}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {
                        loadPage(selDate)
                    }
                </div>
            </div>
        </>
    )
}

export default LocationTerm;