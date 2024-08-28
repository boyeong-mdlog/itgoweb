import React from 'react';
import { useParams } from 'react-router-dom';

import Home from "./Home";
import Notice from "./Notice";
import Question from "./Question";

const PUB = () => {
    const { pageID } = useParams();
    const loadPage = (pageID) => {
        switch (pageID) {
            case "Notice" :
                return <Notice />;
            case "Question" :
                return <Question />;
            default:
                return <Home />;
        }
    };
    return (
        <>
            {loadPage(pageID)}
        </>
    );
}

export default PUB;