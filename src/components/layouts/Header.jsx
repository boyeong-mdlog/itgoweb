import React, {useState} from 'react';
import {Link} from "react-router-dom";
function Header() {
    const [menu, setMenu] = useState("close");
    const openMenu = () => {
        setMenu("open");
    }
    const closeMenu = () => {
        setMenu("close");
    }
    const [menuIdx, setMenuIdx] = useState(0);
    const handleMenuIdx = (mIdx) => {
        setMenuIdx(mIdx)
    }

    const [headerOver, setHeaderOver] = useState("off");
    const handleHeaderOn = (idx) => {
        setHeaderOver("on");
        handleMenuIdx(idx);
    }
    const handleHeaderOut = () => {
        setHeaderOver("off")
    }

    return (
        <>
            <header>
                <div className={`headerWrap ${headerOver}`}>
                    <div className={`headerInner ${menu}`}>
                        <h1>화물잇고</h1>
                        <nav>
                            <div className="responseBar" onClick={openMenu}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                            <ul className={`menuOn${menuIdx}`}>
                                <li className="close">
                                    <button onClick={closeMenu}></button>
                                </li>
                                <li onMouseEnter={()=>handleHeaderOn(1)} onMouseLeave={handleHeaderOut}>
                                    <Link to="/">서비스 소개</Link>
                                    <em></em>
                                    <p>
                                        <Link to="#">차주</Link>
                                        <Link to="#">주선사</Link>
                                        <Link to="#">화주</Link>
                                    </p>
                                </li>
                                <li onMouseEnter={()=>handleHeaderOn(2)} onMouseLeave={handleHeaderOut}>
                                    <Link to="/Notice">공지사항</Link>
                                    <em></em>
                                    <p>
                                        <Link to="/Notice">공지사항</Link>
                                        <Link to="/Notice">이벤트</Link>
                                    </p>
                                </li>
                                <li onMouseEnter={()=>handleHeaderOn(3)} onMouseLeave={handleHeaderOut}>
                                    <Link to="/Question">자주묻는 질문</Link>
                                    <em></em>
                                    <p>
                                        <Link to="/Question">전체</Link>
                                        <Link to="/Question">차주</Link>
                                        <Link to="/Question">주선사</Link>
                                        <Link to="/Question">화주</Link>
                                    </p>
                                </li>
                            </ul>
                        </nav>
                        <button className="goTo">주선사 바로가기</button>
                        <div className="responseBg"></div>
                    </div>

                </div>

            </header>
        </>
    );
}

export default Header;