import styled from 'styled-components';
import {sizes} from '../../../assets/sizes/sizes';
import {colors} from '../../../assets/colors/colors';
import media from '../../../utilities/breakpoints/breakpoints';

export const ContainerSecundary = styled.section`
	width: ${sizes.widthIndex};
	padding: 0 ${sizes.paddingIndex};
	height: 360px;
	min-height: 260px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap-reverse;
`;

export const SecundaryLeft = styled.div`
	flex-grow: 1;
	max-width: 33.33%;
	min-width: 215px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

export const ContainerText1 = styled.div`
	width: 214px;
	max-width: 214px;
	height: auto;
`;

export const Text1 = styled.p`
	font-size: 16px;
	letter-spacing: 0.15px;
	font-weight: 500;
`;

export const ContainerText2 = styled.div`
	width: 214px;
	max-width: 214px;
	height: auto;
	border-bottom: 4px solid ${colors.primary};
	transition: transform 0.3s ease;
	&:hover {
		transform: scale(1.1);
	}
`;

export const Text2 = styled.p`
	font-size: 14px;
	letter-spacing: 1px;
`;

export const ContainerLink = styled.a`
	text-decoration: none;
	color: ${colors.black};
`;
export const SecundaryRight = styled.div`
	flex-grow: 2;
	max-width: 100%;
	min-width: 441px;
	width: 66.66%;
	display: flex;
	justify-content: center;
	align-items: center;
	${media.large`
    
    `}

	${media.medium`
    `}
    
    ${media.small`
        
    `}
`;

export const ContainerImage = styled.img`
	height: 65%;
	${media.large`
        height: 50%;

    `}

	${media.medium`
        display:none

    `}
    
    ${media.small`
        display:none
    `}
`;
