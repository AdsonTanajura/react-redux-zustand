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
    border: 0; 

  & + button {
    border-top: 8px solid #18181b;
  }
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

export const ModuleTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: left;
`;

export const ModuleTitleName = styled.h3`
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