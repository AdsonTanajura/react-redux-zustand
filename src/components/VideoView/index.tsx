import React from "react";

import { VideoAspect, VideoContainer, } from "./style";

import Player from "react-player";

interface VideoViewProps{
    url: string;
}


const VideoView:React.FC<VideoViewProps> = ({url}) => {

    return(
        <VideoContainer>
            <VideoAspect>
                <Player 
                height="100%"
                width="100%"
                controls
                url={url}
                />
            </VideoAspect>
        </VideoContainer>
    )
};

export default VideoView;