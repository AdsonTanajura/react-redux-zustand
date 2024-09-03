import React from "react";

import { Class,ClassDuration,ClassName,ClassesContainer } from "./style";
import { Video } from "lucide-react";

interface LessonProps {
    title: string;
    duration: string;
}

const Lesson:React.FC<LessonProps> = ({title, duration}) => {
    
    return (
        <ClassesContainer>
            <Class>
                <Video hanging={16} width={16} color="#6b7280"/>
                <ClassName>{title}</ClassName>
                <ClassDuration>{duration}</ClassDuration>
            </Class>
        </ClassesContainer>
    )
};

export default Lesson;