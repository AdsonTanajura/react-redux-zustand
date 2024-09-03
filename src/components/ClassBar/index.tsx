import React from "react";

import { ButtonContainer,ModuleClassNumbers,ModuleContainer, ModuleNumber, ModuleTitle, StyledChevronDown, ClassContent} from "./styles";
import { ModuleName } from "../TopBar/styles";
import Lesson from "../Lesson";
import { useAppSelector } from "../../store";

interface ClassBarProps {
    moduleIndex: number;
    title: string;
    amountOfLessons: number;
}

const ClassBar:React.FC<ClassBarProps> = ({amountOfLessons, title, moduleIndex}) => {
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
            {lessons.map(lesson => {
                return (
                    <Lesson 
                    key={lesson.id} 
                    title={lesson.title} 
                    duration={lesson.duration}
                    /> 
                )
            })}
        </ClassContent>

        </ModuleContainer>
    )
};

export default ClassBar;