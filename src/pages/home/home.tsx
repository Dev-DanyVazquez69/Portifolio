import React from "react";
import Slogan from "../../components/shared/slogan/slogan";
import ContainerSecundary from "../../components/home/containerSecundary/containerSecundary";
import ContainerTertiary from "../../components/home/containerTertiary/containerTertiary";
import { ContainerHome } from './style';

const Home: React.FC = () => {
    return (
        <ContainerHome>
            <Slogan />
            <ContainerSecundary />
            <ContainerTertiary />
        </ContainerHome>
    );
};

export default Home;