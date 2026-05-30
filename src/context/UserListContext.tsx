import { createContext, useEffect, useState, useMemo, useCallback, type ReactNode } from "react";
import { user, newFollowe, delFollowe, followers } from "../services/user";
import type { IUser, IGetFollowers } from "../types/typesAuth";

interface IUserListContextData {
    users: IUser[];
    followersData: IGetFollowers | null;
    isLoading: boolean;
    follow: (userId: string) => Promise<void>;
    unfollow: (userId: string) => Promise<void>;
    isFollowing: (userId: string) => boolean;
}

interface UserListProviderProps {
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserListContext = createContext<IUserListContextData>({} as IUserListContextData);

export function UserListProvider({ children }: Readonly<UserListProviderProps>) {

    const [users, setUsers] = useState<IUser[]>([]);
    const [followersData, setFollowersData] = useState<IGetFollowers | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadUsers() {
            try {
                const storedUser = localStorage.getItem("user");
                const loggedUserId = storedUser ? JSON.parse(storedUser).id : null;

                const [usersResponse, followersResult] = await Promise.all([
                    user(),
                    followers(),
                ]);

                const usersArray = Array.isArray(usersResponse)
                    ? usersResponse
                    : (usersResponse as unknown as { data: IUser[] }).data ?? [];

                const filtered = usersArray.filter((u) => u.id !== loggedUserId);
                setUsers(filtered);
                setFollowersData(followersResult);

            } catch (error) {
                console.log("Erro ao carregar usuários", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadUsers();
    }, []);

    const isFollowing = useCallback((userId: string): boolean => {
        if (!followersData?.following) return false;
        return followersData.following.some((f) => f.id === userId);
    }, [followersData]);

    const follow = useCallback(async (userId: string) => {
        try {
            await newFollowe({ userId });
            const followersResult = await followers();
            setFollowersData(followersResult);
        } catch (error) {
            console.log("Erro ao seguir usuário", error);
            throw error;
        }
    }, []);

    const unfollow = useCallback(async (userId: string) => {
        try {
            await delFollowe({ userId });
            const followersResult = await followers();
            setFollowersData(followersResult);
        } catch (error) {
            console.log("Erro ao deixar de seguir", error);
            throw error;
        }
    }, []);

    const value = useMemo(() => ({
        users,
        followersData,
        isLoading,
        follow,
        unfollow,
        isFollowing,
    }), [users, followersData, isLoading, follow, unfollow, isFollowing]);

    return (
        <UserListContext.Provider value={value}>
            {children}
        </UserListContext.Provider>
    );
}