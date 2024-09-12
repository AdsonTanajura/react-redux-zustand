import React, { useEffect } from "react";
import { api } from "../../lib/axios";

import { AsideContainer, Container, Content, MainContainer, ScrollContainer} from './styles';

import useCurrentLessonAndModule from "../../store/slices/player/hooks/useCurrentLessonAndModule";

import TopBar from "../../components/TopBar";
import ClassBar from "../../components/ClassBar";
import VideoView from "../../components/VideoView";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { start } from "../../store/slices/player/player";

const Player:React.FC = () => {
    const dispatch = useDispatch()

    const modules = useAppSelector(state => {
        return state.player.course?.modules
    })

    const { currentLesson } = useCurrentLessonAndModule();

    useEffect(() => {
        api.get('/courses/1').then(response => {
            dispatch(start(response.data))
        })
    }, [])

    useEffect(() => {
       if (currentLesson) {
         document.title = `Assistindo: ${currentLesson.title}`
       }
    }, [currentLesson]);

    return(
        <Container>
            <Content>
                <TopBar />
                <MainContainer>
                    <VideoView />
                        <AsideContainer>
                            <ScrollContainer>
                                {modules && modules.map((module, index) => {
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