import React from 'react';
import {Link} from "react-router-dom";
function Header() {
    return (
        <>
            <header>
                <div className="headerWrap">
                    <div className="headerInner">
                        <h1>화물잇고</h1>
                        <nav>
                            <ul>
                                <li><Link to="#">서비스 소개</Link></li>
                                <li>
                                    <Link to="#">공지사항</Link>
                                    <p>
                                        <span></span>
                                        <Link to="#">공지사항</Link>
                                        <Link to="#">이벤트</Link>
                                    </p>
                                </li>
                                <li>
                                    <Link to="#">자주묻는 질문</Link>
                                    <p>
                                        <span></span>
                                        <Link to="#">전체</Link>
                                        <Link to="#">차주</Link>
                                        <Link to="#">주선사</Link>
                                        <Link to="#">화주</Link>
                                    </p>
                                </li>
                            </ul>
                        </nav>
                        <button>주선사 바로가기</button>
                    </div>

                </div>

            </header>
        </>
    );
}

export default Header;