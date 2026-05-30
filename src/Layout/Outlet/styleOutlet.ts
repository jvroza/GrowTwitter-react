import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    background: ${({ theme }) => theme.background};
`;

export const Main = styled.main`
    flex: 1;
    border-left: 1px solid ${({ theme }) => theme.border};
    border-right: 1px solid ${({ theme }) => theme.border};
    min-height: 100vh;
    background: ${({ theme }) => theme.background};
`;