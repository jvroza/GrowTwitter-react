
import { Outlet } from "react-router";
import { Menu } from "../../components/Menu/Menu.tsx";
import { Trends } from "../../components/Trends/Trends.tsx";



export function LayoutOutlet() {
    return (
        <>
            <Menu />
            <Outlet />
            <Trends />
        </>
    )
}