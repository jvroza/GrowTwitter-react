import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.background};
`;

export const PageTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const TrendList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TrendItem = styled.div`
    padding: 14px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    cursor: pointer;

    &:hover { background: ${({ theme }) => theme.hoverBackground}; }
`;

export const TrendCategory = styled.span`
    display: block;
    font-size: 12px;
    color: ${({ theme }) => theme.textSecondary};
    margin-bottom: 2px;
`;

export const TrendTitle = styled.span`
    display: block;
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
`;