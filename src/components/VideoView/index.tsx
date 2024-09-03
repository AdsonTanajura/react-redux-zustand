import React from "react";

import { VideoAspect, VideoContainer, } from "./style";

import Player from "react-player";
import { useAppSelector } from "../../store";


const VideoView:React.FC = () => {
    const lesson = useAppSelector(state => {
        const { currentLessonIndex, currentModuleIndex } = state.player
        const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

        return currentLesson;
    })

    return(
        <VideoContainer>
            <VideoAspect>
                <Player 
                height="100%"
                width="100%"
                controls
                url= {`https://www.youtube.com/watch?v=${lesson.id}`}
                />
            </VideoAspect>
        </VideoContainer>
    )
};

export default VideoView;