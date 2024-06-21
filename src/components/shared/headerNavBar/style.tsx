import styled from "styled-components";
import { colors } from "../../../assets/colors/colors";
import { Link } from "react-router-dom";
import { sizes } from "../../../assets/sizes/sizes";
import media from "../../../utilities/breakpoints/breakpoints";
import { AiFillCloseCircle } from 'react-icons/ai'

export const NavContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    background-color:${colors.white};
    width: ${sizes.widthIndex};
    padding: 0 ${sizes.paddingIndex};
    max-height: 78px;
    height: 78px;
    overflow: hidden;
`;

export const ItemNav = styled(Link)`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
    transform: translateX(15px);
  }
`;

export const TextNav = styled.text`
    color:${colors.primary};
    font-size: 14px;
    font-weight: 500;

    ${media.medium`
    font-size: 12px;
    `}
`;
export const Logo = styled.img`
    width: 54px;
    height: 54px;

    ${media.large`
        width: 50px;
        height: 50px;
    `}
    
    ${media.medium`
        width: 48px;
        height: 48px;
    `}
    
`;

export const ContainerButton = styled.div`
    width: 36.06px;
    height: 28.69px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const LineButton = styled.div`
    width: 100%;
    height: 3px;
    background-color: ${colors.black};
    border-radius: 10px;
`;

export const ContainerMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: fixed;
    top: 0;
    left: 0px; /* Inicialmente oculto fora da tela */
    width: auto;
    height:auto;
    padding: 30px;
    background-color: ${colors.primary};
    transition: left 0.3s ease; /* Transição suave de entrada e saída */
    align-items: flex-start;
    border-radius: 0px 0px 25px 25px;
    border: 1px solid white;
`;

export const TextNavMenu = styled.text`
    color:${colors.white};
    font-size: 14px;
    font-weight: 500;
    text-decoration: solid;
    border-bottom: 2px solid white;

    ${media.medium`
    font-size: 12px;
    `}
`;

export const IconClose = styled(AiFillCloseCircle)`
    font-size: 30px;
    color:${colors.white};
    align-self: center;
    position: absolute;
    top: 7px;
    right: 7px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

export const ContainerClose = styled.div`
    width: auto;
    height: auto;
`;