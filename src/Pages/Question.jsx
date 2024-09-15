import React, {useState} from "react";

function Question() {
    const [tabValue, setTabValue] = useState("1")
    const tabSort = (idx) =>{
        setTabValue(idx);
    }

    const [subTab, setSubTab] = useState(0);

    const subTabClick = (index) => {
        setSubTab(index);
    }
    const subMenu = [
        {idx : 0, name: "전체"},
        {idx : 1, name: "이용 방법"},
        {idx : 2, name: "결제/정산"},
        {idx : 3, name: "회원가입"},
        {idx : 4, name: "기타"},
    ];

    return (
        <>
            <div className="pageTitle">
                <strong className="qna">자주하는 질문</strong>
            </div>
            <div className="qnaTab">
                <div className={`itgoWebTab setTab_${tabValue}`}>
                    <button onClick={() => tabSort(1)}>전체</button>
                    <button onClick={() => tabSort(2)}>차주</button>
                    <button onClick={() => tabSort(3)}>주선사</button>
                    <button onClick={() => tabSort(4)}>화주</button>
                    <div className="indicate"></div>
                </div>
            </div>
            <div className="subTab">
                {subMenu.map((tab, index) => {
                   return (
                       <button key={index} className={subTab === index ? "active" : ""} onClick={()=> subTabClick(index)}>
                           {tab.name}
                       </button>
                   )
                })}
            </div>
            <div className="boardList">
                <ul>
                    <li className="open">
                        <div className="info">
                            <div className="list">
                                <div className="type"><span>일반</span><em>이용방법</em></div>
                                <div className="title"><b className="Q">화물잇고 차주 가입동의서 다운로드</b></div>
                                <div className="date">2024-03-11</div>
                            </div>
                            <div className="btn">
                                <button></button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="A">
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

                        </div>

                    </li>
                    <li>
                        <div className="info">
                            <div className="list">
                                <div className="type"><span>일반</span></div>
                                <div className="title"><b className="Q">화물잇고 차주 가입동의서 다운로드</b></div>
                                <div className="date">2024-03-11</div>
                            </div>
                            <div className="btn">
                                <button></button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="A">
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
                        </div>

                    </li>
                    <li>
                        <div className="info">
                            <div className="list">
                                <div className="type"><span>일반</span></div>
                                <div className="title"><b className="Q">화물잇고 차주 가입동의서 다운로드</b></div>
                                <div className="date">2024-03-11</div>
                            </div>
                            <div className="btn">
                                <button></button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="A">
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
                        </div>

                    </li>
                </ul>
            </div>
        </>
    );
}

export default Question;