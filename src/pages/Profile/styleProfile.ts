import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.background};
`;

export const TopBar = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    padding: 4px 8px;
    border-radius: 50%;

    &:hover { background: ${({ theme }) => theme.hoverBackground}; }
`;

export const TopInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TopName = styled.span`
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
`;

export const TweetCount = styled.span`
    font-size: 13px;
    color: ${({ theme }) => theme.textSecondary};
`;

export const Banner = styled.div`
    width: 100%;
    height: 120px;
    background: #1da1f2;
`;

export const ProfileSection = styled.div`
    padding: 12px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const AvatarWrapper = styled.div`
    margin-top: -40px;
    margin-bottom: 8px;
`;

export const Avatar = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.background};
    object-fit: cover;
    background: #eee;
`;

export const UserName = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
`;

export const UserHandle = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.textSecondary};
`;

export const Divider = styled.div`
    height: 1px;
    background: ${({ theme }) => theme.border};
`;

export const TweetCard = styled.div`
    display: flex;
    gap: 12px;
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.border};

    &:hover { background: ${({ theme }) => theme.hoverBackground}; }
`;

export const TweetAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
`;

export const TweetContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const TweetHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const TweetUser = styled.span`
    font-weight: 700;
    font-size: 15px;
    color: ${({ theme }) => theme.text};
`;

export const TweetHandle = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.textSecondary};
`;

export const TweetText = styled.p`
    font-size: 15px;
    color: ${({ theme }) => theme.text};
    line-height: 1.5;
    margin: 0;
`;

export const TweetActions = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 8px;
`;

export const ActionBtn = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.textSecondary};
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0;
    transition: color 0.2s;

    &:hover { color: #1da1f2; }
`;

export const FollowButton = styled.button`
    margin-top: 12px;
    background: #1d9bf0;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover { background: #1a8cd8; }
`;