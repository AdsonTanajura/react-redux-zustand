import React from "react";

import { VideoAspect, VideoContainer, } from "./style";

import Player from "react-player";
import { useAppDispatch } from "../../store";
import { nextVideo } from "../../store/slices/player/player";
import useCurrentLessonAndModule from "../../store/slices/player/hooks/useCurrentLessonAndModule";


const VideoView:React.FC = () => {
    const dispacht = useAppDispatch()

    const { currentLesson  } = useCurrentLessonAndModule();

    const handleNextPlay = () => {
        dispacht(nextVideo())
    };

    if (!currentLesson) {
        return null;
    }

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