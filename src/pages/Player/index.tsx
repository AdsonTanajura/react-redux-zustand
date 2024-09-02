import React from "react";
import { MessageCircle } from "lucide-react";

import { Container, Header, Main } from './styles';

const Player:React.FC = () => {

    return(
        <Container>
            <div>
                <Header>
                    <div>
                        <h1>Fudamentos do Redux</h1>
                        <span>Modulo "Desvendado o Redux"</span>
                    </div>
                    <button>
                        <MessageCircle width={16} height={16} />
                        Deixar feedback
                    </button>
                </Header>
                <Main>
                    <div>Video</div>
                    <aside></aside>
                </Main>
            </div>
        </Container>
    )
};

export default Player;