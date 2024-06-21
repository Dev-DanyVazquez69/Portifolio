import React from "react";
import Header from "../../components/shared/headerNavBar/navHeader";

const NotFound: React.FC = () => {
    return (
        <div>
            <Header></Header>
            <h1>Página 404</h1>
            <h2>Página não encontrada 😥</h2>
        </div>
    )
}

export default NotFound;