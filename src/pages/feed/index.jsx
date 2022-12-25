//import { Link } from 'react-router-dom';

//import bannerImage from "../../assets/banner.png"

//import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight } from './styles';
import icon from "../../assets/icon.jpg"

const Feed = () => {
    return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome="Hamilton Junior" image={icon} />
                <UserInfo percentual={35} nome="Hamilton Junior" image={icon} />
                <UserInfo percentual={23} nome="Hamilton Junior" image={icon} />
                <UserInfo percentual={16} nome="Hamilton Junior" image={icon} />
                <UserInfo percentual={5} nome="Hamilton Junior" image={icon} />
            </Column>
        </Container>
    </>
    )
}

export { Feed }