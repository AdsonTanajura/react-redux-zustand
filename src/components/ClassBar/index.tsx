import React from "react";

import { ButtonContainer,ModuleClassNumbers,ModuleContainer, ModuleNumber, ModuleTitle, StyledChevronDown, ClassContent} from "./styles";
import { ModuleName } from "../TopBar/styles";
import Lesson from "../Lesson";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { play } from "../../store/slices/player/player";

interface ClassBarProps {
    moduleIndex: number;
    title: string;
    amountOfLessons: number;
}

const ClassBar:React.FC<ClassBarProps> = ({amountOfLessons, title, moduleIndex}) => {
    const dispatch = useDispatch()

    const { currentLessonIndex, currentModulerIndex } = useAppSelector(state => {
        const currentModulerIndex = state.player.currentModuleIndex
        const currentLessonIndex = state.player.currentLessonIndex

        return { currentLessonIndex, currentModulerIndex }
    })

    const lessons = useAppSelector(state => {
        return state.player.course?.modules[moduleIndex].lessons
    })
    return(
        <ModuleContainer defaultOpen={moduleIndex === 0}>

            <ButtonContainer>
                <ModuleNumber>{moduleIndex + 1}</ModuleNumber>
                <ModuleTitle>
                    <ModuleName>{title}</ModuleName>
                    <ModuleClassNumbers>{amountOfLessons} aulas</ModuleClassNumbers>
                </ModuleTitle>
                <StyledChevronDown />
            </ButtonContainer>
        
        <ClassContent>
            {lessons && lessons.map((lesson, lessonIndex) => {
                const isCurrent = currentModulerIndex === moduleIndex && currentLessonIndex === lessonIndex
                return (
                    <Lesson 
                    key={lesson.id} 
                    title={lesson.title} 
                    duration={lesson.duration}
                    onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                    isCurrent={isCurrent}
                    /> 
                )
            })}
        </ClassContent>

        </ModuleContainer>
    )
};

export default ClassBar;