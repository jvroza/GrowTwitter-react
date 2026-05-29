import * as S from "./styleProfile";

const mockUser = {
    username: "joaovitor",
    name: "João Vitor",
    imageUrl: "/assets/avatar.png",
};

const mockTweets = [
    {
        id: "1",
        content: "Finalmente terminei as rotas do GrowTwitter 🚀",
        likes: 14,
        replies: [1, 2],
        author: { name: "João Vitor", username: "joaovitor" },
    },
    {
        id: "2",
        content: "styled-components com transient props é vida. Nunca mais vou poluir o DOM.",
        likes: 7,
        replies: [],
        author: { name: "João Vitor", username: "joaovitor" },
    },
    {
        id: "3",
        content: "vestTech M7 chegando, bora codar!",
        likes: 21,
        replies: [1],
        author: { name: "João Vitor", username: "joaovitor" },
    },
];

export function Profile() {
    const profileUser = mockUser;
    const tweets = mockTweets;
    const deletingId: string | null = null;

    return (
        <S.Container>
            <S.TopBar>
                <S.BackButton onClick={() => null}>←</S.BackButton>
                <S.TopInfo>
                    <S.TopName>Perfil de @{profileUser.username}</S.TopName>
                    <S.TweetCount>{tweets.length} tweets</S.TweetCount>
                </S.TopInfo>
            </S.TopBar>

            <S.Banner />

            <S.ProfileSection>
                <S.AvatarWrapper>
                    <S.Avatar
                        src={profileUser.imageUrl}
                        alt="avatar"
                    />
                </S.AvatarWrapper>
                <S.UserName>{profileUser.name}</S.UserName>
                <S.UserHandle>@{profileUser.username}</S.UserHandle>
            </S.ProfileSection>

            <S.Divider />

            {tweets.map((tweet) => (
                <S.TweetCard key={tweet.id}>
                    <S.TweetAvatar
                        src={profileUser.imageUrl}
                        alt="avatar"
                    />
                    <S.TweetContent>
                        <S.TweetHeader>
                            <S.TweetUser>{tweet.author.name}</S.TweetUser>
                            <S.TweetHandle>@{tweet.author.username}</S.TweetHandle>
                        </S.TweetHeader>
                        <S.TweetText>{tweet.content}</S.TweetText>
                        <S.TweetActions>
                            <S.ActionBtn>💬 {tweet.replies.length}</S.ActionBtn>
                            <S.ActionBtn>🤍 {tweet.likes}</S.ActionBtn>
                            <S.ActionBtn
                                onClick={() => null}
                                disabled={deletingId === tweet.id}
                            >
                                {deletingId === tweet.id ? "⏳" : "🗑️"}
                            </S.ActionBtn>
                        </S.TweetActions>
                    </S.TweetContent>
                </S.TweetCard>
            ))}
        </S.Container>
    );
}