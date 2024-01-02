import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";
import { MdVideoSettings } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsPlusSquare } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { RiMenuLine } from "react-icons/ri";
import MyProfileImg from "../img/myprofile.jpeg";
import InstagramLogoImg from "../img/instagramLogo.png";

const PCSideBar = styled.div`
    width: 250px;
    height: 100%;
    padding-top: 40px;
    padding-left: 30px;
    border-right: thin solid gray;
`;
const NonPCSideBar = styled.div` 
    width: 70px;
    height: 100%;
    padding-top: 40px;
    padding-left: 30px;
    border-right: thin solid gray;
`;
const IconStyle = {
    width: '23px',
    height: '23px',
    marginRight: '20px'
};

const Box = styled.div` 
    padding: 20px;
`;

const IconTextContainer = styled.tr`
  display: flex;
  align-items: center;
`;


const SideBar = () => {
    const isPc = useMediaQuery({
        query : "(min-width:1300px)"
      });
      const nonPC = useMediaQuery({
        query : "(max-width:1299px)"
      });
    
    return (
        <>
            {isPc && 
                <PCSideBar>
                    <img src = {InstagramLogoImg} alt="인스타그램 로고 이미지" style={{width:'120px', height: '60px'}}/>
                    <Box/>
                    <table style={{width: '250px'}}>
                    <IconTextContainer><GrHomeRounded style={IconStyle}/>홈</IconTextContainer>
                    <Box/>
                    <IconTextContainer><IoSearchOutline style={IconStyle}/>검색</IconTextContainer>
                    <Box/>
                    <IconTextContainer><IoCompassOutline style={IconStyle}/>탐색 탭</IconTextContainer>
                    <Box/>
                    <IconTextContainer><MdVideoSettings style={IconStyle}/>릴스</IconTextContainer>
                    <Box/>
                    <IconTextContainer><IoPaperPlaneOutline style={IconStyle}/>메시지</IconTextContainer>
                    <Box/>
                    <IconTextContainer><IoIosHeartEmpty style={IconStyle}/>알림</IconTextContainer>
                    <Box/>
                    <IconTextContainer><BsPlusSquare style={IconStyle}/>만들기</IconTextContainer>
                    <Box/>
                    <IconTextContainer style={{fontWeight: 'bold'}}>
                        <div style={{ width: '27px', height: '27px', borderRadius: '50%', overflow: 'hidden', marginRight:'15px' }}>
                            <img src={MyProfileImg} alt="프로필 이미지" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        프로필
                    </IconTextContainer>
                    <Box style={{height: '100px'}}/>
                    <IconTextContainer><RiMenuLine style={IconStyle}/> 더 보기 </IconTextContainer>
                    </table>
                </PCSideBar>
            }
            {nonPC && 
                <NonPCSideBar>
                    <IoLogoInstagram style={{width: '30px', height: '30px', marginRight: '20px'}}/>
                    <Box/>
                    <table style={{width: '70px'}}>
                    <IconTextContainer><GrHomeRounded style={IconStyle}/></IconTextContainer>
                    <Box/>
                    <IconTextContainer><IoSearchOutline style={IconStyle}/></IconTextContainer>
                    <Box/>
                    <IconTextContainer><IoCompassOutline style={IconStyle}/></IconTextContainer>
                    <Box/>
                    <IconTextContainer><MdVideoSettings style={IconStyle}/></IconTextContainer>
                    <Box/>
                    <IconTextContainer><IoPaperPlaneOutline style={IconStyle}/></IconTextContainer>
                    <Box/>
                    <IconTextContainer><IoIosHeartEmpty style={IconStyle}/></IconTextContainer>
                    <Box/>
                    <IconTextContainer><BsPlusSquare style={IconStyle}/></IconTextContainer>
                    <Box/>
                    <IconTextContainer>
                        <div style={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden' }}>
                            <img src={MyProfileImg} alt="프로필 이미지" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </IconTextContainer>
                    <Box style={{height: '100px'}}/>
                    <IconTextContainer><RiMenuLine style={IconStyle}/></IconTextContainer>
                    </table>
                </NonPCSideBar>
            }
        </>
    );
}
export default SideBar;