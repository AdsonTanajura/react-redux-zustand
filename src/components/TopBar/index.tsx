import React from "react";

import { Container, TilteContainer, Tilte, ModuleName } from "./styles";
import FeedBackButton from "../FeedBackButton";
import useCurrentLessonAndModule from "../../store/slices/player/hooks/useCurrentLessonAndModule";


const TopBar:React.FC = () => {
    const { currentLesson, currentModule } = useCurrentLessonAndModule();

    if(!currentModule || !currentLesson) {
        return (
        <Container>
            <FeedBackButton />
        </Container>
        )
    }

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