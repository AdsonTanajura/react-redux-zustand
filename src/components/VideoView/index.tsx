import React from "react";

import { VideoAspect, VideoContainer, } from "./style";

import Player from "react-player";
import { useDispatch } from "react-redux";
import { nextVideo } from "../../store/slices/player/player";
import useCurrentLessonAndModule from "../../store/slices/player/hooks/useCurrentLessonAndModule";


const VideoView:React.FC = () => {
    const dispacht = useDispatch()

    const { currentLesson  } = useCurrentLessonAndModule();

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
                url= {`https://www.youtube.com/watch?v=${currentLesson.id}`}
                />
            </VideoAspect>
        </VideoContainer>
    )
};

export default VideoView;