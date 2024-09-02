import React from "react";

import { ButtonContainer,ModuleClassNumbers,ModuleContainer, ModuleNumber, ModuleTilte, StyledChevronDown, ClassesContainer, Class, ClassName, ClassDuration } from "./styles";
import { ModuleName } from "../TopBar/styles";
import { Video } from "lucide-react";

const ClassBar:React.FC = () => {

    return(
        <ModuleContainer>
            <ButtonContainer>
                <ModuleNumber>1</ModuleNumber>
                <ModuleTilte>
                    <ModuleName>Desvendando o Redux</ModuleName>
                    <ModuleClassNumbers>12 aulas</ModuleClassNumbers>
                </ModuleTilte>
                <StyledChevronDown />
            </ButtonContainer>
            <ClassesContainer>
                <Class>
                    <Video hanging={16} width={16} color="#6b7280"/>
                    <ClassName>Fundamentos do Redux</ClassName>
                    <ClassDuration>09:13</ClassDuration>
                </Class>
            </ClassesContainer>
        </ModuleContainer>
    )
};

export default ClassBar;