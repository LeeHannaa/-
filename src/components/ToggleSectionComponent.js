import React from 'react';
import {Link} from "react-router-dom";
import { BsPersonSquare } from "react-icons/bs";
import { PiSquaresFourThin } from "react-icons/pi";
import styled from 'styled-components';

const IconTextContainer = styled.div`
    display: flex;
    align-items: center; // 컴포넌트들 가로로 위치
    justify-content: center; // 가로 가운데 정렬
    font-size: 13px;
`;
const IconStyle1 = {
    width: '23px',
    height: '18px',
    marginRight: '5px',
};

const IconStyle2 = {
    width: '14px',
    height: '14px',
    marginRight: '10px',
};

const ToggleSection = () => {
    return (
        <IconTextContainer>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><IconTextContainer style={{marginRight: '50px', fontWeight: 'bold'}}><PiSquaresFourThin style={IconStyle1}/>게시물</IconTextContainer></Link>
            <Link to="/" style={{ textDecoration: 'none', color: 'gray' }}><IconTextContainer><BsPersonSquare style={IconStyle2}/>테그됨</IconTextContainer></Link>
        </IconTextContainer>
    );
}
export default ToggleSection;