import React from "react";

import { AsideContainer, Container, Content, MainContainer, ScrollContainer} from './styles';

import TopBar from "../../components/TopBar";
import ClassBar from "../../components/ClassBar";
import VideoView from "../../components/VideoView";
const Player:React.FC = () => {

    return(
        <Container>
            <Content>
                <TopBar tilte="Fundamentos do Redux" module="Modulo Desvendando o Redux" />
                <MainContainer>
                    <VideoView url="https://youtu.be/SAC4lwJRKdo?si=rZ6mAXbI2h4OKm9x"/>
                        <AsideContainer>
                            <ScrollContainer>
                                <ClassBar />
                                <ClassBar />
                                <ClassBar />
                                <ClassBar />
                                <ClassBar />
                            </ScrollContainer>
                        </AsideContainer>
                </MainContainer>
            </Content>
        </Container>
    )
};

export default Player;