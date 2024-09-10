import React, { useEffect } from "react";

import { AsideContainer, Container, Content, MainContainer, ScrollContainer} from './styles';

import useCurrentLessonAndModule from "../../store/slices/player/hooks/useCurrentLessonAndModule";

import TopBar from "../../components/TopBar";
import ClassBar from "../../components/ClassBar";
import VideoView from "../../components/VideoView";
import { useAppSelector } from "../../store";

const Player:React.FC = () => {
    const modules = useAppSelector(state => {
        return state.player.course.modules
    })

    const { currentLesson } = useCurrentLessonAndModule();

    useEffect(() => {
        document.title = `Assistindo: ${currentLesson.title}`
    }, [currentLesson]);

    return(
        <Container>
            <Content>
                <TopBar />
                <MainContainer>
                    <VideoView />
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