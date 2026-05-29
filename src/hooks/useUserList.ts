import { useContext } from "react";
import { UserListContext } from "../context/UserListContext";

export function useUserList() {
    const context = useContext(UserListContext);

    if (!context) {
        throw new Error("useUserList deve ser usado dentro de um UserListProvider");
    }

    return context;
}