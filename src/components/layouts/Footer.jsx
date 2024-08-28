import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-logo">화물잇고</div>
                <div className="footer-address">
                    <span>대표번호 1661-8505</span>
                    <span>사업자등록번호 220-81-39938</span>
                    <span>통신판매신고 제 2015-서울용산-00481호</span>
                </div>
                <div className="footer-term">
                    <ul>
                        <li>㈜ LG유플러스</li>
                        <li>서울특별시 용산구 한강대로32</li>
                        <li>대표이사 황현식</li>
                        <li><Link to="/itgoTerm">이용약관</Link></li>
                        <li><Link to="/privacyPolicyTerm">개인정보처리방침</Link></li>
                        <li><Link to="/locationTerm">위치기반서비스약관 </Link></li>
                        <li>Fax : 0503-8379-8505</li>
                        <li>email : cs@itgo.ai</li>
                    </ul>
                </div>
                <div className="footer-copyright">copyright ⓒ LG Uplus Corp. All Rights Reserved.</div>
            </footer>
        </>
    );
}

export default Footer;