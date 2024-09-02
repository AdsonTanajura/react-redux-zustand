import { styled } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: #18181b;
    color: #f9fafb;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        width: 1100px;
        flex-direction: column;
        gap: 24px;
    }
`;

export const Header = styled.div`
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    h1{
        font-size: 24px;
        font-weight: bold;
    }
    span{
        font-size: 14px;
        color: #a1a1aa;
    }
    button{
        display: flex;
        align-items: center;
        gap: 8px;
        border-radius: 4px;
        background-color: #7c3aed;
        padding: 8px 12px 8px 12px;
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        transition: background-color 0.3s;
        
        &:hover {
            background-color: #6d28d9;
}
    }
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