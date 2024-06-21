import React from 'react';
import * as S from './style';


interface interfaceRegisterItem {
    title: string,
    describe: string,
    image: string,
}

const RegisterItem: React.FC<interfaceRegisterItem> = (props) => {
    return (
            <S.ContainerItem>
                <S.ContainerImage>
                    <S.CertificateImage src={props.image}/>
                </S.ContainerImage>
                <S.ContainerText>
                    <S.TextItem>{props.title}</S.TextItem>
                    <S.TextDescribe>
                        {props.describe}
                    </S.TextDescribe>
                </S.ContainerText>
            </S.ContainerItem>
    );
};

export default RegisterItem;
