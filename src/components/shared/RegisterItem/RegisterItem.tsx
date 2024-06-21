import React from 'react';
import * as S from './style';

const RegisterItem: React.FC = () => {
    return (
            <S.ContainerItem>
                <S.ContainerImage></S.ContainerImage>
                <S.ContainerText>
                    <S.TextItem>xxxxxxxxxxxxxxxxxxxxx</S.TextItem>
                    <S.TextDescribe>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </S.TextDescribe>
                </S.ContainerText>
            </S.ContainerItem>
    );
};

export default RegisterItem;
