import React from "react";

import { VideoAspect, VideoContainer, LoadingContainer, StyledLoader } from "./style";

import Player from "react-player";
import { useAppDispatch, useAppSelector } from "../../store";
import { nextVideo } from "../../store/slices/player/player";
import useCurrentLessonAndModule from "../../store/slices/player/hooks/useCurrentLessonAndModule";


const VideoView:React.FC = () => {
    const dispacht = useAppDispatch()
    const { currentLesson  } = useCurrentLessonAndModule();
    const isCourseLoading = useAppSelector(state => state.player.isLoading)
 
    const handleNextPlay = () => {
        dispacht(nextVideo())

    };

    return(
        <VideoContainer>
            { isCourseLoading ? (
                <VideoAspect>
                    <LoadingContainer>
                        <StyledLoader />
                    </LoadingContainer>
                </VideoAspect>
            ) : (
            <VideoAspect>
                <Player 
                height="100%"
                width="100%"
                controls
                onEnded={handleNextPlay}
                url= {`https://www.youtube.com/watch?v=${currentLesson?.id}`}
                />
            </VideoAspect>
            )}
        </VideoContainer>
    )
};

export default VideoView;