import { styled } from "styled-components";

export const ClassesContainer = styled.nav`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
`;

export const Class = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #9ca3af;
    background-color: transparent;
    border: none;
    transition: color 0.3s;
    
    &:hover {
        color: #f4f4f5;
    }

    &[data-active='true'] {
        color: #34d399;
    }
`;

export const ClassName = styled.span`

`;

export const ClassDuration = styled.span`
    margin-left: auto;
    font-family: "Monaco", "Menlo", "Courier New", monospace;
    font-size: 12px;
    color: #9ca3af;
`;