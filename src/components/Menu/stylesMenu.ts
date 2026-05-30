import styled from "styled-components";

export const Container = styled.aside`
    width: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    position: sticky;
    top: 0;
    height: 100vh;
    border-right: 1px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.background};
    box-sizing: border-box;
    overflow: hidden;
`;

export const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Logo = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    padding: 8px 0;
`;

export const LogoImage = styled.img`
    height: 32px;
    object-fit: contain;
`;

export const NavList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const NavItem = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px 12px;
    border-radius: 24px;
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    text-align: left;
    width: 100%;
    transition: background 0.2s;
    font-family: inherit;

    &:hover {
        background: ${({ theme }) => theme.hoverBackground};
    }
`;

export const TweetButton = styled.button`
    background: #1da1f2;
    color: #fff;
    border: none;
    border-radius: 24px;
    padding: 12px 0;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    transition: background 0.2s;
    font-family: inherit;

    &:hover {
        background: #1a91da;
    }
`;

export const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 8px;
`;

export const UserRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: hidden;
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const UserName = styled.span`
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const UserHandle = styled.span`
    font-size: 13px;
    color: ${({ theme }) => theme.textSecondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const LogoutButton = styled.button`
    background: none;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 6px;
    padding: 6px 14px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    width: 100%;
    transition: background 0.2s;
    font-family: inherit;

    &:hover {
        background: ${({ theme }) => theme.hoverBackground};
    }
`;

export const ThemeButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
    padding: 10px 16px;
    border-radius: 9999px;
    border: 1px solid ${({ theme }) => theme.border};
    background: transparent;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s;
    width: 100%;
    font-family: inherit;

    &:hover {
        background: ${({ theme }) => theme.hoverBackground};
    }
`;