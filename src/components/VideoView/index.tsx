import React from "react";

import { VideoAspect, VideoContainer, } from "./style";

import Player from "react-player";
import { useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { nextVideo } from "../../store/slices/player";


const VideoView:React.FC = () => {
    const dispacht = useDispatch()

    const lesson = useAppSelector(state => {
        const { currentLessonIndex, currentModuleIndex } = state.player
        const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

        return currentLesson;
    })

    const handleNextPlay = () => {
        dispacht(nextVideo())
    };

    return(
        <VideoContainer>
            <VideoAspect>
                <Player 
                height="100%"
                width="100%"
                controls
                onEnded={handleNextPlay}
                url= {`https://www.youtube.com/watch?v=${lesson.id}`}
                />
            </VideoAspect>
        </VideoContainer>
    )
};

export default VideoView;