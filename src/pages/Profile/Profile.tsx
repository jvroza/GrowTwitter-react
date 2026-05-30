import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styleProfile";
import { useProfile } from "../../hooks/useProfile";
import { Loading } from "../../components/Loading/loading.tsx";
import { ImageIcon } from "lucide-react";

type TabType = "tweets" | "respostas" | "midia" | "curtidas";

export function Profile() {
    const navigate = useNavigate();
    const { profileUser, tweets, followersData, isLoading, deleteTweet } = useProfile();
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<TabType>("tweets");

    if (isLoading) return <Loading />;

    async function handleDelete(tweetId: string) {
        if (deletingId) return;
        try {
            setDeletingId(tweetId);
            await deleteTweet(tweetId);
        } catch (error) {
            console.log("Erro ao deletar tweet", error);
        } finally {
            setDeletingId(null);
        }
    }

    const tweetList = Array.isArray(tweets) ? tweets : [];
    const followingCount = followersData?.following?.length ?? 0;
    const followersCount = followersData?.followers?.length ?? 0;

    return (
        <S.Container>
            <S.TopBar>
                <S.BackButton onClick={() => navigate(-1)}>←</S.BackButton>
                <S.TopInfo>
                    <S.TopName>{profileUser?.name}</S.TopName>
                    <S.TweetCount>{tweetList.length} tweets</S.TweetCount>
                </S.TopInfo>
            </S.TopBar>

            <S.Banner>
                <ImageIcon size={48} color="#555" />
            </S.Banner>

            <S.ProfileSection>
                <S.AvatarWrapper>
                    <S.Avatar
                        src={profileUser?.imageUrl ?? "/assets/avatar.png"}
                        alt="avatar"
                    />
                </S.AvatarWrapper>

                <S.UserName>{profileUser?.name}</S.UserName>
                <S.UserHandle>@{profileUser?.username}</S.UserHandle>

                <S.StatsRow>
                    <S.StatItem>
                        <S.StatCount>{followingCount}</S.StatCount>
                        <S.StatLabel>Seguindo</S.StatLabel>
                    </S.StatItem>
                    <S.StatItem>
                        <S.StatCount>{followersCount}</S.StatCount>
                        <S.StatLabel>Seguidores</S.StatLabel>
                    </S.StatItem>
                </S.StatsRow>
            </S.ProfileSection>

            <S.TabsRow>
                {(["tweets", "respostas", "midia", "curtidas"] as TabType[]).map((tab) => (
                    <S.Tab
                        key={tab}
                        $active={activeTab === tab}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </S.Tab>
                ))}
            </S.TabsRow>

            {activeTab === "tweets" && (
                <>
                    {tweetList.length === 0 ? (
                        <S.EmptyState>
                            <S.EmptyTitle>Ainda sem tweets</S.EmptyTitle>
                            <S.EmptyText>Quando você tweetar, seus posts aparecerão aqui.</S.EmptyText>
                        </S.EmptyState>
                    ) : (
                        tweetList.map((tweet) => (
                            <S.TweetCard key={tweet.id}>
                                <S.TweetAvatar
                                    src={profileUser?.imageUrl ?? "/assets/avatar.png"}
                                    alt="avatar"
                                />
                                <S.TweetContent>
                                    <S.TweetHeader>
                                        <S.TweetUser>{tweet.author.name}</S.TweetUser>
                                        <S.TweetHandle>@{tweet.author.username}</S.TweetHandle>
                                    </S.TweetHeader>
                                    <S.TweetText>{tweet.content}</S.TweetText>
                                    <S.TweetActions>
                                        <S.ActionBtn>💬 {Array.isArray(tweet.replies) ? tweet.replies.length : 0}</S.ActionBtn>
                                        <S.ActionBtn>🤍 {Array.isArray(tweet.likes) ? tweet.likes.length : 0}</S.ActionBtn>
                                        <S.ActionBtn
                                            onClick={() => handleDelete(tweet.id)}
                                            disabled={deletingId === tweet.id}
                                        >
                                            {deletingId === tweet.id ? "⏳" : "🗑️"}
                                        </S.ActionBtn>
                                    </S.TweetActions>
                                </S.TweetContent>
                            </S.TweetCard>
                        ))
                    )}
                </>
            )}

            {activeTab === "respostas" && (
                <S.EmptyState>
                    <S.EmptyTitle>Postou, recebeu respostas</S.EmptyTitle>
                    <S.EmptyText>Se para você ainda não aparece nenhuma resposta aqui, talvez você precise interagir um pouco mais com os posts dos perfis que você segue.</S.EmptyText>
                </S.EmptyState>
            )}

            {activeTab === "midia" && (
                <S.EmptyState>
                    <S.EmptyTitle>Sem mídias ainda</S.EmptyTitle>
                    <S.EmptyText>Quando você postar fotos ou vídeos, eles aparecerão aqui.</S.EmptyText>
                </S.EmptyState>
            )}

            {activeTab === "curtidas" && (
                <S.EmptyState>
                    <S.EmptyTitle>Sem curtidas ainda</S.EmptyTitle>
                    <S.EmptyText>Tweets que você curtir aparecerão aqui.</S.EmptyText>
                </S.EmptyState>
            )}
        </S.Container>
    );
}