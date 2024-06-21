import styled from "styled-components";
import { sizes } from "../../../assets/sizes/sizes";
import { colors } from "../../../assets/colors/colors";
import media from "../../../utilities/breakpoints/breakpoints";

export const ContainerTertiary = styled.div`
    height: 750px;
    width: ${sizes.widthIndex};
    padding: 0 ${sizes.paddingIndex};
    display: flex;
    flex-direction: column;
    gap: 20px;

    ${media.large`
    
    `}
    
    ${media.medium`
    
    `}
    
    ${media.small`
        gap: 70px;
        height: 870px;
        
    `}
`;

export const ContainerColab = styled.section`
    height: 186px;
    width: 100%;
`;

export const Text1 = styled.h3`
    font-size: 20px;
    line-height:24px;
    letter-spacing:4.15px;
`;

export const Text2 = styled.h2`
    font-size: 34px;
    font-weight: 500;
`;

export const ContainerClientes = styled.section`
    height: 144px;
    max-height: 144px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 15px;
    overflow: hidden;

    ${media.large`
    
    `}
    
    ${media.medium`
    
    `}
    
    ${media.small`
                
    `}
`;

export const ContainerText = styled.div`
    width: 50%;
    height: auto;
`;

export const TextCliente = styled.h5`
    font-size: 18px;
    color: ${colors.black};

    ${media.small`
    font-size: 15px;
    `}

`;


export const TextDescribeCliente = styled.p`
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.15px;

    ${media.medium`
    font-size: 10px;
    `}

    ${media.small`
    font-size: 8px;
    `}
`;

export const ContainerImage = styled.div`
    width: 97px;
    height: 100%;
    max-height: 200px;
    background-color: ${colors.primary};
    margin: auto 0;

`;