import React from 'react';
import styled from 'styled-components';
import ToggleSectionComponent from './ToggleSectionComponent';
import HeadSectionComponent from './HeadSectionComponent';
import CardViewSectionComponent from './CardViewComponent';

const Box = styled.div` 
    margin: 20px;
`;

const MainSection = () => {
    return (
        <div>
            <HeadSectionComponent />
            <ToggleSectionComponent />
            <Box/>
            <CardViewSectionComponent />
        </div>
    );
}
export default MainSection;