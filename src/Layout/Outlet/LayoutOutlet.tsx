import { Outlet } from "react-router";
import * as S from "./styleOutlet";
import { Menu } from "../../components/Menu/Menu.tsx";
import { Trends } from "../../components/Trends/Trends.tsx";
import { UserListProvider } from "../../context/UserListContext.tsx";
import { TweetProvider } from "../../context/TweetContext.tsx";
import { ProfileProvider } from "../../context/ProfileContext.tsx";

export function LayoutOutlet () {

    return (
        <TweetProvider>
            <UserListProvider>
                <ProfileProvider> 
                    <S.Wrapper>
                        <Menu/>
                        <S.Main>
                            <Outlet/>
                        </S.Main>
                        <Trends/>
                    </S.Wrapper>
                </ProfileProvider>
            </UserListProvider>
        </TweetProvider>
    )

};