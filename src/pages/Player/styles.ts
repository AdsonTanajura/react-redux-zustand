import { styled } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: #18181b;
    color: #f9fafb;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const Content = styled.div`
        width: 1100px;
        gap: 24px;
        display: flex;
        flex-direction: column;
        
        `;

export const MainContainer = styled.main`
    position: relative;
    display: flex;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #000;
    border-color: #2d3748;
    background-color: #111827;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    padding-right: 20rem;
`;

export const AsideContainer = styled.aside`
    width: 320px;
    border-left: 1px solid #000;
    border-color: #2d3748;
    background-color: #111827;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
`;

export const VideoContainer = styled.div`
    flex: 1;
`;

export const VideoAspect = styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: #18181b;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px
  }

  &::-webkit-scrollbar-track {
    background: #0f0f0f;
  }

  &::-webkit-scrollbar-thumb {
    background: #2d2d2d;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
