import React, {useState} from "react";

function Notice() {
    const [tabValue, setTabValue] = useState("1")
    const tabSort = (idx) =>{
        setTabValue(idx);
    }


    return (
        <>
            <div className="pageTitle">
                <strong className="notice">공지사항</strong>
            </div>
            <div className="noticeTab">
                <div className={`itgoWebTab setTab_${tabValue}`}>
                    <button onClick={() => tabSort(1)}>공지</button>
                    <button onClick={() => tabSort(2)}>이벤트</button>
                    <div className="indicate"></div>
                </div>
            </div>
            <div className="noticeList">
                <ul>
                    <li className="open">
                        <div className="info">
                            <div className="list">
                                <div className="type"><span>일반</span></div>
                                <div className="title">화물잇고 차주 가입동의서 다운로드</div>
                                <div className="date">2024-03-11</div>
                            </div>
                            <div className="btn">
                                <button></button>
                            </div>
                        </div>
                        <div className="content">
                            안녕하세요, 화물잇고 운영팀 입니다.<br/>
                            <br/>
                            화물잇고 회원가입시, 사업자등록증과 차량등록증의 명의가 다를 경우<br/>
                            가입동의서를 작성하여 첨부하시면 가입 승인이 가능합니다.<br/>
                            <br/>
                            아래 링크에서 가입동의서를 다운받고, 가입심사 서류에 첨부해주세요.<br/>
                            <br/>
                            ■ PC로 전송하는 방법<br/>
                            ① 안드로이드 : 다운로드 > 내 파일 > 우측상단 더보기 > 파일 보내기 > mail/카카오톡 전송<br/>
                            ② 아이폰 : 상단/하단의 공유하기 아이콘 > mail/카카오톡 전송<br/>
                        </div>

                    </li>
                    <li>
                        <div className="info">
                            <div className="list">
                                <div className="type"><span>일반</span></div>
                                <div className="title">화물잇고 차주 가입동의서 다운로드</div>
                                <div className="date">2024-03-11</div>
                            </div>
                            <div className="btn">
                                <button></button>
                            </div>
                        </div>
                        <div className="content">
                            안녕하세요, 화물잇고 운영팀 입니다.<br/>
                            <br/>
                            화물잇고 회원가입시, 사업자등록증과 차량등록증의 명의가 다를 경우<br/>
                            가입동의서를 작성하여 첨부하시면 가입 승인이 가능합니다.<br/>
                            <br/>
                            아래 링크에서 가입동의서를 다운받고, 가입심사 서류에 첨부해주세요.<br/>
                            <br/>
                            ■ PC로 전송하는 방법<br/>
                            ① 안드로이드 : 다운로드 > 내 파일 > 우측상단 더보기 > 파일 보내기 > mail/카카오톡 전송<br/>
                            ② 아이폰 : 상단/하단의 공유하기 아이콘 > mail/카카오톡 전송<br/>
                        </div>

                    </li>
                    <li>
                        <div className="info">
                            <div className="list">
                                <div className="type"><span>일반</span></div>
                                <div className="title">화물잇고 차주 가입동의서 다운로드</div>
                                <div className="date">2024-03-11</div>
                            </div>
                            <div className="btn">
                                <button></button>
                            </div>
                        </div>
                        <div className="content">
                            안녕하세요, 화물잇고 운영팀 입니다.<br/>
                            <br/>
                            화물잇고 회원가입시, 사업자등록증과 차량등록증의 명의가 다를 경우<br/>
                            가입동의서를 작성하여 첨부하시면 가입 승인이 가능합니다.<br/>
                            <br/>
                            아래 링크에서 가입동의서를 다운받고, 가입심사 서류에 첨부해주세요.<br/>
                            <br/>
                            ■ PC로 전송하는 방법<br/>
                            ① 안드로이드 : 다운로드 > 내 파일 > 우측상단 더보기 > 파일 보내기 > mail/카카오톡 전송<br/>
                            ② 아이폰 : 상단/하단의 공유하기 아이콘 > mail/카카오톡 전송<br/>
                        </div>

                    </li>
                </ul>
            </div>
        </>
    );
}

export default Notice;