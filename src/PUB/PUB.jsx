import React from 'react';
import { useParams } from 'react-router-dom';

const PUB = () => {
    const PageID = useParams();
    const loadPage = (PageID) => {
        switch (PageID) {
            case "" :
                return <></>;
            default:
                return <></>;
        }
    };
    return (
        <>
            {loadPage(PageID)}
        </>
    );
}

export default PUB;