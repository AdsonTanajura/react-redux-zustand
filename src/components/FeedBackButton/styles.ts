import { styled } from "styled-components";

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    align-self: center;
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
`;