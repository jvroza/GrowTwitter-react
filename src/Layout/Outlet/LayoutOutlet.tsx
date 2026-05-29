import { Outlet } from "react-router";
import * as S from "./styleOutlet";
import { Menu } from "../../components/Menu/Menu.tsx";
import { Trends } from "../../components/Trends/Trends.tsx";
import { UserListProvider } from "../../context/UserListContext.tsx";

export function LayoutOutlet() {
    return (
        <UserListProvider>
            <S.Wrapper>
                <Menu/>
                <S.Main>
                    <Outlet/>
                </S.Main>
                <Trends/>
            </S.Wrapper>
        </UserListProvider>
    )
}