import { styled } from "styled-components";
import { Loader } from "lucide-react";


export const VideoContainer = styled.div`
    flex: 1;
`;

export const VideoAspect = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: #18181b;
`;

export const LoadingContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const StyledLoader = styled(Loader)`
    color: #a1a1aa;
    width: 24px;
    height: 24px;

    @keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    }

    animation: spin 1s linear infinite;
`