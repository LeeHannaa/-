import React from 'react';
import styled from 'styled-components';
import MyProfileImg from "../img/myprofile.jpeg";
import { useMediaQuery } from "react-responsive";

const ProfileDiv = styled.div` 
    width: 170px;
    height: 170px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 100px;
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

const Box = styled.div` 
    padding: 3px;
`;

const Bold = styled.span` 
    font-weight: bold;
    margin-right: 30px;
`;

const InstaButton = styled.button`
    width: 150px;
    height: 30px;
    backgroundcolor: gray;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 20px;
`;

const HeadSection = () => {
    const isPc = useMediaQuery({
        query : "(min-width:1300px)"
      });
      const nonPC = useMediaQuery({
        query : "(max-width:1299px)"
      });

    return (
        <>
        {isPc && 
            <>
                <IconTextContainer style={{margin: '0 200px 0 200px'}}>
                    <ProfileDiv>
                        <ProfileImg src={MyProfileImg} alt="프로필 이미지" />
                    </ProfileDiv>
                    <table>
                        <IconTextContainer style={{fontSize: '23px'}}>
                            ihan_na589
                            <a href="https://www.instagram.com/ihan_na589/" target="_blank" rel="noreferrer">
                                <InstaButton>인스타 방문하기</InstaButton>
                            </a>
                        </IconTextContainer>
                        <Box/><Box/><Box/>
                        <tr>게시물 <Bold>4</Bold> 팔로워 <Bold>228</Bold> 팔로잉 <Bold>237</Bold></tr>
                        <Box/><Box/><Box/><Box/>
                        <tr>한동대학교 전산전자공학부 장기려 21학번 이한나</tr>
                        <tr>멋쟁이 아기사자 12기 Frontend 크앙~🦁</tr>
                        <tr># <Bold>ISTP</Bold></tr>
                    </table>
                </IconTextContainer>
                <Box/><Box/><Box/><Box/><Box/>
                <hr></hr>
            </>
        }
        {nonPC && 
            <>
                <IconTextContainer style={{margin: '0 150px 0 150px'}}>
                    <ProfileDiv>
                        <ProfileImg src={MyProfileImg} alt="프로필 이미지" />
                    </ProfileDiv>
                    <table>
                        <IconTextContainer style={{fontSize: '23px'}}>
                            ihan_na589
                            <a href="https://www.instagram.com/ihan_na589/" target="_blank" rel="noreferrer">
                                <InstaButton>인스타 방문하기</InstaButton>
                            </a>
                        </IconTextContainer>
                        <Box/><Box/><Box/>
                        <tr>게시물 <Bold>3</Bold> 팔로워 <Bold>228</Bold> 팔로잉 <Bold>237</Bold></tr>
                        <Box/><Box/><Box/><Box/>
                        <tr>한동대학교 전산전자공학부 장기려 21학번 이한나</tr>
                        <tr>멋쟁이 아기사자 12기 Frontend 크앙~🦁</tr>
                        <tr># <Bold>ISTP</Bold></tr>
                    </table>
                </IconTextContainer>
                <Box/><Box/><Box/><Box/><Box/>
                <hr></hr>
            </>
        }
        </>
    );
}
export default HeadSection;