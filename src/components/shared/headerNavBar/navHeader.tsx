import React, { useState, useEffect } from "react";
import * as S from './style';
import logo from '../../../assets/img/logo.png'

const Header: React.FC = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768); // Defina o limite de largura para considerar como dispositivo móvel
        };
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Executa a verificação no carregamento da página
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <>
            {isMobile?(
                <>
                 <S.NavContainer>
                 <S.ContainerButton onClick={() => setOpenMenu(true)}>
                     <S.LineButton />
                     <S.LineButton />
                     <S.LineButton />
                 </S.ContainerButton>
                 <S.ItemNav to='/'>
                     <S.Logo src={logo} alt="logo kanagawa" />
                 </S.ItemNav>
             </S.NavContainer>
                {openMenu ? (
                 <S.ContainerMenu>
                     <S.ContainerClose onClick={()=> setOpenMenu(false)}>
                         <S.IconClose />
                     </S.ContainerClose>
                     <S.ItemNav to='/'>
                         <S.TextNavMenu> INICIO</S.TextNavMenu>
                     </S.ItemNav>
                     <S.ItemNav to='/certificados'>
                         <S.TextNavMenu> CERTIFICADOS</S.TextNavMenu>
                     </S.ItemNav>
                     <S.ItemNav to='/projetos'>
                         <S.TextNavMenu> PROJETOS</S.TextNavMenu>
                     </S.ItemNav>
                     <S.ItemNav to='/tecnologias'>
                         <S.TextNavMenu> TECNOLOGIAS</S.TextNavMenu>
                     </S.ItemNav>
                     <S.ItemNav to='/contatos'>
                         <S.TextNavMenu> SOBRE</S.TextNavMenu>
                     </S.ItemNav>
                 </S.ContainerMenu>
             ) : (
                 <div />
             )
            }
            </>
            ):(
                <S.NavContainer>
                <S.ItemNav to='/'>
                    <S.TextNav> INICIO</S.TextNav>
                </S.ItemNav>
                <S.ItemNav to='/certificados'>
                    <S.TextNav> CERTIFICADOS</S.TextNav>
                </S.ItemNav>
                <S.ItemNav to='/projetos'>
                    <S.TextNav> PROJETOS</S.TextNav>
                </S.ItemNav>
                <S.ItemNav to='/tecnologias'>
                    <S.TextNav> TECNOLOGIAS</S.TextNav>
                </S.ItemNav>
                <S.ItemNav to='/sobre'>
                    <S.TextNav> SOBRE</S.TextNav>
                </S.ItemNav>
                <S.ItemNav to='/'>
                    <S.Logo src={logo} alt="logo kanagawa" />
                </S.ItemNav>

            </S.NavContainer>
            )}
        </>
    )
}

export default Header;