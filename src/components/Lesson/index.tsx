import React from "react";

import { Class,ClassDuration,ClassName,ClassesContainer } from "./style";
import { PlayCircle, Video } from "lucide-react";
interface LessonProps {
    title: string;
    duration: string;
    isCurrent: boolean;
    onPlay: () => void;
}

const Lesson:React.FC<LessonProps> = ({title, duration, onPlay, isCurrent = false}) => {
    
    return (
        <ClassesContainer >
            <Class onClick={onPlay} data-active={isCurrent}>
                {isCurrent ? (
                    <PlayCircle hanging={16} width={16} color="#34d399" />
                ): (
                <Video hanging={16} width={16} color="#6b7280"/>
                ) }
                <ClassName>{title}</ClassName>
                <ClassDuration>{duration}</ClassDuration>
            </Class>
        </ClassesContainer>
    )
};

export default Lesson;