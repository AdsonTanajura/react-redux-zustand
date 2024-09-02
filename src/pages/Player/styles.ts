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

export const Main = styled.main`
    position: relative;
    display: flex;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #000;
    border-color: #2d3748;
    background-color: #111827;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    div{
        flex: 1;
    }
    aside{
        width: 320px;
        height: 600px;
        border-left: 1px solid #000;
        border-color: #2d3748;
        background-color: #111827;
    }
`;

export const TilteContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;