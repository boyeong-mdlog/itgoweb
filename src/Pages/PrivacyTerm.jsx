import React, {useState} from "react";
import PrivacyTerm240627 from "./PrivacyTerm240627";
import PrivacyTerm240531 from "./PrivacyTerm240531";
import PrivacyTerm240403 from "./PrivacyTerm240403";
import PrivacyTerm231018 from "./PrivacyTerm231018";

const selectDate = ["2024년 06월 27일", "2024년 05월 31일", "2024년 04월 03일", "2023년 10월 18일"];

function PrivacyTerm() {
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
                return <PrivacyTerm240627 />;
            case 1:
                return <PrivacyTerm240531 />;
            case 2:
                return <PrivacyTerm240403 />;
            case 3:
                return <PrivacyTerm231018 />;
            default :
                return <></>
        }
    }
    return (
        <>
            <div id="terms" className="terms-container">
                <div id="termsCont">
                    <div className="terms-title">
                        <h2>LG 유플러스 화물잇고 개인정보 처리방침</h2>
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

export default PrivacyTerm;