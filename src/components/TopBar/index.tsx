import React from "react";

import { Container, TilteContainer, Tilte, ModuleName } from "./styles";
import FeedBackButton from "../FeedBackButton";
import { useAppSelector } from "../../store";


const TopBar:React.FC = () => {
    const { currentLesson, currentModule } = useAppSelector(state => {
        const { currentLessonIndex, currentModuleIndex} = state.player

        const currentModule =state.player.course.modules[currentModuleIndex]
        const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

        return { currentLesson, currentModule }
    })


    return (
        <Container>
            <TilteContainer>
                <Tilte>{currentLesson.title}</Tilte>
                <ModuleName>Módulo "{currentModule.title}"</ModuleName>
            </TilteContainer>
            <FeedBackButton />
        </Container>
    )
};

export default TopBar;