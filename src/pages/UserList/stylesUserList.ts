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

export const UserCard = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.border};

    &:hover { background: ${({ theme }) => theme.hoverBackground}; }
`;

export const UserAvatar = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const UserName = styled.span`
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
`;

export const UserHandle = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.textSecondary};
`;

export const FollowButton = styled.button<{ $following: boolean }>`
    background: ${({ $following }) => ($following ? "transparent" : "#1d9bf0")};
    color: ${({ $following, theme }) => ($following ? theme.text : "white")};
    border: ${({ $following, theme }) => ($following ? `1px solid ${theme.border}` : "none")};
    border-radius: 20px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background: ${({ $following, theme }) => ($following ? theme.hoverBackground : "#1a8cd8")};
    }
`;