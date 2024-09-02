import React from "react";

import { AsideContainer, Container, Content, MainContainer, VideoContainer } from './styles';

import TopBar from "../../components/TopBar";
import ClassBar from "../../components/ClassBar";
const Player:React.FC = () => {

    return(
        <Container>
            <Content>
                <TopBar tilte="Fundamentos do Redux" module="Modulo Desvendando o Redux" />
                <MainContainer>
                    <VideoContainer>Video</VideoContainer>
                    <AsideContainer>
                        <ClassBar />
                    </AsideContainer>
                </MainContainer>
            </Content>
        </Container>
    )
};

export default Player;