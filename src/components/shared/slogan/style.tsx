import styled from "styled-components";
import { sizes } from "../../../assets/sizes/sizes";
import { colors } from "../../../assets/colors/colors";
import { FaPlay } from 'react-icons/fa';
import media from "../../../utilities/breakpoints/breakpoints";

export const ContainerSlogan = styled.section`
    height: 486px;
    width: ${sizes.widthIndex};
    padding: 0 ${sizes.paddingIndex};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin: 0 auto;


    ${media.large`
    
    `}
    
    ${media.medium`
    
    `}
    
    ${media.small`
        align-items: center;
        height: 240px;
    `}

`;

export const ContainerNameCompany = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    align-items: center;

    ${media.large`
   
    `}
    
    ${media.medium`
   
    `}
    
    ${media.small`
        justify-content:center;
    `}
`;

export const NameCompany = styled.h1`
    max-width: 100%;
    margin: 0;
    font-size: 75px;
    color:${colors.primary};
    font-weight: bolder;
    font-family: JosefinSans-Bold;

    ${media.large`
    font-size: 65px;
    `}
    
    ${media.medium`
    font-size: 55px;
    `}
    
    ${media.small`
        font-size: 40px;
        font-weight: bolder;
        text-align: center;
        letter-spacing: 5px;
    `}
`;

export const IconArrow = styled(FaPlay)`
    font-size: 25px;
    transform: rotate(270deg);
    align-self: flex-start;

    ${media.large`
    font-size: 21.67px;
    `}
    
    ${media.medium`
    font-size: 18.34px;
    `}
    
    ${media.small`
    font-size: 15.01px;
    `}
`;


export const TextSlogan = styled.h5`
    margin: 0;
    font-size: 24px;
    color:${colors.primary};
    letter-spacing: 0.18 px;


    ${media.large`
    font-size: 20px;
    `}
    
    ${media.medium`
    font-size: 18px;
    `}
    
    ${media.small`
    font-size: 16px;
    font-weight:500;
    `}
`;

export const Buttom = styled.button`
    width: 298px;
    height: 46px;
    border-radius: 8px;
    background-color: ${colors.primary};
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
        background-color: #212864;
    }
`;

export const TextButtom = styled.p`
    font-size: 15px;
    letter-spacing: -0.1%;
    color: ${colors.white};
`;