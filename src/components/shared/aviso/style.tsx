import styled from "styled-components";
import { colors } from "../../../assets/colors/colors";
import { IoIosConstruct } from 'react-icons/io'
import media from "../../../utilities/breakpoints/breakpoints";

export const ContainerAviso = styled.div`
    width:100%;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ImagemAviso = styled(IoIosConstruct)`
    width: 25%;
    height: 50%;
    color:${colors.primary};
`;

export const TextAviso = styled.text`
    font-size: 35px;
    color:${colors.primary};
    font-weight: bolder;
    text-align: center;

    ${media.medium`
        font-size: 25px;
    `}
    
    ${media.small`
        font-size: 15px;
    `}
`;