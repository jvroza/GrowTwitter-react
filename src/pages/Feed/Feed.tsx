import { useEffect } from "react";
import { TweetCard } from "../../components/Tweets/TweetCards";
import { useTweet } from "../../hooks/useTweet";
import * as S from "./stylesFeed";

export function Feed() {
    const { tweets, isLoading, refreshFeed } = useTweet();

    useEffect(() => {
        refreshFeed();
    }, [refreshFeed]);

    if (isLoading) return <p>Carregando...</p>;

    return (
        <S.Container>
            <S.PageTitle>Página Inicial</S.PageTitle>
            {tweets.map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} />
            ))}
        </S.Container>
    );
}
