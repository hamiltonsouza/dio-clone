import React from "react";

import icon from "../../assets/icon.jpg"

import background from "../../assets/background.png"

import { FiThumbsUp } from 'react-icons/fi';

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={ background }/>
            <Content>
                <UserInfo>
                    <UserPicture src={ icon } />
                    <div>
                        <h4>Hamilton Junior</h4>
                        <p>Há 7 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito para o curso de HTML e CSS no bootcamp dio... <strong>Saiba mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }