import { styled } from "styled-components";

import { ChevronDown } from "lucide-react";

export const ModuleContainer = styled.div`

`;
export const ButtonContainer = styled.button`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 12px;
    background-color: #27272a;
    padding: 16px;
`;

export const ModuleNumber = styled.div`
    display: flex;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    background-color: #09090b;
    font-size: 12px;
    color: #9ca3af;
`;

export const ModuleTilte = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: left;
`;

export const ModuleTilteName = styled.h3`
    font-size: 14px;
    font-weight: bold;
`;

export const ModuleClassNumbers = styled.span`
    font-size: 12px;
    color: #9ca3af;
`;

export const StyledChevronDown = styled(ChevronDown)`
    color: #9ca3af;
    margin-left: auto;
    width: 20px;
    height: 20px;
`;

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
`;

export const ClassName = styled.span`

`;

export const ClassDuration = styled.span`
    margin-left: auto;
    font-family: "Monaco", "Menlo", "Courier New", monospace;
    font-size: 12px;
    color: #9ca3af;
`;