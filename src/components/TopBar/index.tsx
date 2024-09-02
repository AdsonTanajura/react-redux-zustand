import React from "react";

import { Container, TilteContainer, Tilte, ModuleName } from "./styles";
import FeedBackButton from "../FeedBackButton";

interface TopBarProps {
    tilte:string;
    module: string;
}

const TopBar:React.FC<TopBarProps> = ({tilte, module}) => {

    return (
        <Container>
            <TilteContainer>
                <Tilte>{tilte}</Tilte>
                <ModuleName>{module}</ModuleName>
            </TilteContainer>
            <FeedBackButton />
        </Container>
    )
};

export default TopBar;