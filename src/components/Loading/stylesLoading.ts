import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

// Loading padrão (Feed, Profile, UserList)
export const Overlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 200px;
`;

// Loading overlay (Login, Register)
export const FullOverlay = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(2px);
    z-index: 999;
`;

export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top-color: #1d9bf0;
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
`;