import React from "react";

import logo from "../../assets/logo-dio.png"

import { Button } from '../Button';

import icon from "../../assets/icon.jpg"

import {

    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper

} from './styles';

const Header = ({autenticado}) => {

    return (
        <Wrapper>
            <Container>
                <Row>   
                    <img src={logo} alt="logo da dio" height="80px" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src={icon}/>
                    ) : (
                        <>   
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar"/>
                            <Button title="Cadastrar"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )

}

export { Header }