import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import { IoCopy } from "react-icons/io5";
import { BsFillPinAngleFill } from "react-icons/bs";
import IntroProfileImg from '../img/introprofile.jpeg';
import Volleyball1Img from '../img/volleyball1.jpeg';
import Volleyball2Img from '../img/volleyball2.jpeg';
import Volleyball3Img from '../img/volleyball3.jpeg';
import Volleyball4Img from '../img/volleyball4.jpeg';
import FavoFood1Img from '../img/favofood1.jpeg';
import FavoFood2Img from '../img/favofood2.jpeg';
import FavoFood3Img from '../img/favofood3.jpeg';
import FavoFood4Img from '../img/favofood4.jpeg';
import NoFood1Img from '../img/nofood1.jpeg';
import NoFood2Img from '../img/nofood2.png';
import NoFood3Img from '../img/nofood3.jpeg';
import NoFood4Img from '../img/nofood4.jpeg';
import MyProfileImg from "../img/myprofile.jpeg";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

import { useState } from 'react';
import Modal from 'react-modal';

const Container = styled.div`
    display: flex;
    flex-wrap : wrap;
`;

const CardDiv = styled.div` 
    width: 315px;
    height: 310px;
    overflow: hidden;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
    position: relative; //부모요소
    overflow: hidden;
`;

const CardImg= styled.img` 
    position: absolute; //자식요소
    top: 0; 
    left: 0; //부모요소인 div 태그의 왼쪽 상단에 이미지를 위치
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const IconStyle = {
    position: 'absolute',
    color: 'white', 
    right:0, 
    margin: 5,
};

const ModalContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ModalDiv = styled.div` 
    width: 800px;
    height: 760px;
    overflow: hidden;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
    position: relative; //부모요소
    overflow: hidden;
`;
const ModalImg= styled.img` 
    position: absolute; //자식요소
    top: 0; 
    left: 0; //부모요소인 div 태그의 왼쪽 상단에 이미지를 위치
    width: 100%;
    height: 100%;
    padding-top: 10px;
    object-fit: cover;
    z-index: 0;
`;

const ProfileDiv = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
`;

const ProfileImg = styled.img` 
    width: 100%;
    height: 100%;
    objectFit: cover;
`;
const IconTextContainer = styled.tr`
  display: flex;
  align-items: center;
`;

const posts = [
    {
        id: 1,
        loveNum: '88',
        content: '#자취중 #동계 프로젝트 마무리 #친해지기',
        image:[IntroProfileImg]
    },
    {
        id: 2,
        loveNum: '75',
        content: '#취미 #배구 #스파이크 #세터 #KUSF대회',
        image:[Volleyball1Img, Volleyball2Img, Volleyball3Img, Volleyball4Img]
    },
    {
        id: 3,
        loveNum: '90',
        content: '#초밥 #회 #해산물 #고기 #김치찌개 #된장찌개 #한식 #마라탕',
        image:[FavoFood1Img, FavoFood2Img, FavoFood3Img, FavoFood4Img]
    },
    {
        id: 4,
        loveNum: '91',
        content: '#가지 #멍게 #해파리 #당근 #양고기 #추어탕',
        image:[NoFood1Img, NoFood2Img, NoFood3Img, NoFood4Img]
    }
]

const CardViewSection = () => {
    const isPc = useMediaQuery({
        query : "(min-width:1300px)"
      });
      const nonPC = useMediaQuery({
        query : "(max-width:1299px)"
      });
    const [isOpen, setIsOpen] = useState(false);
    const [selectedInfo, setSelectedInfo] = useState(null);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModalHandler = (post) => {
        setIsOpen(!isOpen);
        setSelectedInfo(post);
        setCurrentImageIndex(0); // Reset the image index when opening the modal
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % selectedInfo.image.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + selectedInfo.image.length) % selectedInfo.image.length
        );
    };
    return (
        <>
        {isPc && 
            <Container style={{width: '1000px'}}>
                {posts.map((post) => (
                    <>
                    <CardDiv key={post.id} onClick={() => openModalHandler(post)}>
                        <CardImg src = {post.image[0]} alt = {`Post ${post.id}`}/>
                        {post.id === 1 && <BsFillPinAngleFill style={IconStyle}/>}
                        {post.id !== 1 && <IoCopy style={IconStyle}/>}
                    </CardDiv>
                    </>
                ))}
            </Container>
        }
        {nonPC && 
            <Container style={{width: '800px', justifyContent: 'center'}}>
            {posts.map((post) => (
                <>
                <CardDiv key={post.id} onClick={() => openModalHandler(post)}>
                    <CardImg src = {post.image[0]} alt = {`Post ${post.id}`}/>
                    {post.id === 1 && <BsFillPinAngleFill style={IconStyle}/>}
                    {post.id !== 1 && <IoCopy style={IconStyle}/>}
                </CardDiv>
                </>
            ))}
        </Container>
        }
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} 
                    style={{ content: { width: '80%',margin: 'auto', padding: '0'} }}>
                    {selectedInfo && (
                        <ModalContainer>
                            { selectedInfo.id !== 1 && (
                                <>
                                    <IoIosArrowDropleft onClick={prevImage}/>
                                    <ModalDiv>
                                        <ModalImg src={selectedInfo.image[currentImageIndex]} alt={`Post ${selectedInfo.id}`} />
                                    </ModalDiv>
                                    <IoIosArrowDropright onClick={nextImage}/>
                                </>
                            )}
                            { selectedInfo.id === 1 && (
                                <>
                                    <ModalDiv style={{marginRight: '30px'}}>
                                        <ModalImg src={selectedInfo.image[currentImageIndex]} alt={`Post ${selectedInfo.id}`} />
                                    </ModalDiv>
                                </>
                            )}
                            <div style={{width: '40%', textAlign: 'center'}}>
                                <IconTextContainer>
                                    <ProfileDiv>
                                        <ProfileImg src={MyProfileImg} alt="프로필 이미지" />
                                    </ProfileDiv>
                                    <h4>ihan_na589</h4> 
                                </IconTextContainer>
                                <hr style={{marginRight: '20px'}}></hr>
                                <h4 style={{marginBottom: '600px'}}>{selectedInfo.content}</h4>
                            </div>
                        </ModalContainer>
                    )}
                
            </Modal>
        </>
    );
}
export default CardViewSection;