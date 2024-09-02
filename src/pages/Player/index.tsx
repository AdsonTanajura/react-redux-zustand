import React from "react";

import { Container, Main, Content } from './styles';

import TopBar from "../../components/TopBar";

const Player:React.FC = () => {

    return(
        <Container>
            <Content>
                <TopBar tilte="Fundamentos do Redux" module="Modulo Desvendando o Redux" />
                <Main>
                    <div>Video</div>
                    <aside></aside>
                </Main>
            </Content>
        </Container>
    )
};

export default Player;