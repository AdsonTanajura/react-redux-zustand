import React from "react";

import { ButtonContainer,ModuleClassNumbers,ModuleContainer, ModuleNumber, ModuleTitle, StyledChevronDown, ClassContent} from "./styles";
import { ModuleName } from "../TopBar/styles";
import Lesson from "../Lesson";

interface ClassBarProps {
    moduleIndex: number;
    title: string;
    amountOfLessons: number;
}

const ClassBar:React.FC<ClassBarProps> = ({amountOfLessons, title, moduleIndex}) => {

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
            <Lesson title="Fundamentos do Redux" duration="09:00"/>
        </ClassContent>

        </ModuleContainer>
    )
};

export default ClassBar;