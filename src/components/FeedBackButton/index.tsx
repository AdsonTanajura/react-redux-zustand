import React from "react";
import { ButtonContainer } from "./styles";
import { MessageCircle } from "lucide-react";

const FeedBackButton:React.FC = () => {

    return(
        <ButtonContainer>
                <MessageCircle width={16} height={16} />
                Deixar feedback
        </ButtonContainer>
    )
};

export default FeedBackButton;