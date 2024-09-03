import React from "react";

import { AsideContainer, Container, Content, MainContainer, ScrollContainer} from './styles';

import TopBar from "../../components/TopBar";
import ClassBar from "../../components/ClassBar";
import VideoView from "../../components/VideoView";
import { useAppSelector } from "../../store";

const Player:React.FC = () => {
    const modules = useAppSelector(state => {
        return state.player.course.modules
    })

    return(
        <Container>
            <Content>
                <TopBar tilte="Fundamentos do Redux" module="Modulo Desvendando o Redux" />
                <MainContainer>
                    <VideoView url="https://youtu.be/SAC4lwJRKdo?si=rZ6mAXbI2h4OKm9x"/>
                        <AsideContainer>
                            <ScrollContainer>
                                {modules.map((module, index) => {
                                    return (
                                        <ClassBar 
                                        key={module.id}
                                        title={module.title}
                                        amountOfLessons={module.lessons.length}moduleIndex={index}
                                        />
                                    )
                                })}
                            </ScrollContainer>
                        </AsideContainer>
                </MainContainer>
            </Content>
        </Container>
    )
};

export default Player;