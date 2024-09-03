import React from "react";

import { ButtonContainer,ModuleClassNumbers,ModuleContainer, ModuleNumber, ModuleTitle, StyledChevronDown, ClassContent} from "./styles";
import { ModuleName } from "../TopBar/styles";
import Lesson from "../Lesson";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { play } from "../../store/slices/player";

interface ClassBarProps {
    moduleIndex: number;
    title: string;
    amountOfLessons: number;
}

const ClassBar:React.FC<ClassBarProps> = ({amountOfLessons, title, moduleIndex}) => {
    const dispatch = useDispatch()

    const lessons = useAppSelector(state => {
        return state.player.course.modules[moduleIndex].lessons
    })
    return(
        <ModuleContainer>

            <ButtonContainer>
                <ModuleNumber>{moduleIndex + 1}</ModuleNumber>
                <ModuleTitle>
                    <ModuleName>{title}</ModuleName>
                    <ModuleClassNumbers>{amountOfLessons} aulas</ModuleClassNumbers>
                </ModuleTitle>
                <StyledChevronDown />
            </ButtonContainer>
        
        <ClassContent>
            {lessons.map((lesson, lessonIndex) => {
                return (
                    <Lesson 
                    key={lesson.id} 
                    title={lesson.title} 
                    duration={lesson.duration}
                    onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                    /> 
                )
            })}
        </ClassContent>

        </ModuleContainer>
    )
};

export default ClassBar;