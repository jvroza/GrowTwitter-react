import { useState } from "react";
import * as S from "../../pages/Feed/stylesFeed.ts";
import { useTweet } from "../../hooks/useTweet.ts";
import { useAuth } from "../../hooks/useAuth.ts";
import type { IGetTweetResponse } from "../../types/typesTeweets";

interface TweetCardProps {
    tweet: IGetTweetResponse;
}

export function TweetCard({ tweet }: Readonly<TweetCardProps>) {
    const { like, removeLike, removeTweet, reply, refreshFeed, removeReply, editTweet } = useTweet();
    const { user } = useAuth();

    const repliesArray = Array.isArray(tweet.replies) ? tweet.replies : [];
    const likesArray = Array.isArray(tweet.likes) ? tweet.likes : [];

    const alreadyLiked = likesArray.some((l) => l.author?.id === user?.id);
    const [liked, setLiked] = useState(alreadyLiked);
    const [likesCount, setLikesCount] = useState(likesArray.length);

    const isOwner = tweet.author?.id === user?.id;

    const [isDeleting, setIsDeleting] = useState(false);
    const [deletingReplyId, setDeletingReplyId] = useState<string | null>(null);
    const [showReply, setShowReply] = useState(false);
    const [replyContent, setReplyContent] = useState("");
    const [isSendingReply, setIsSendingReply] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(tweet.content);
    const [isSavingEdit, setIsSavingEdit] = useState(false);

    async function handleLike() {
        if (liked) {
            await removeLike({ tweetId: tweet.id });
            setLikesCount((prev) => prev - 1);
        } else {
            await like({ tweetId: tweet.id });
            setLikesCount((prev) => prev + 1);
        }
        setLiked(!liked);
    }

    async function handleDelete() {
        if (isDeleting) return;
        try {
            setIsDeleting(true);
            await removeTweet({ tweetId: tweet.id });
            await refreshFeed();
        } catch (error) {
            console.log("Erro ao deletar tweet", error);
        } finally {
            setIsDeleting(false);
        }
    }

    async function handleReply() {
        if (!replyContent.trim() || isSendingReply) return;
        try {
            setIsSendingReply(true);
            await reply({ content: replyContent, replyTo: tweet.id });
            await refreshFeed();
            setReplyContent("");
            setShowReply(false);
        } catch (error) {
            console.log("Erro ao comentar", error);
        } finally {
            setIsSendingReply(false);
        }
    }

    async function handleDeleteReply(replyId:string) {
        if (deletingReplyId) return;
        try {
            setDeletingReplyId(replyId);
            await removeReply({ tweetId: replyId });
        } catch (error) {
            console.log("Erro ao deletar reply", error);
        } finally {
            setDeletingReplyId(null);
        }
    }

    async function handleSaveEdit() {
        if (!editContent.trim() || isSavingEdit) return;
        if (editContent === tweet.content) {
            setIsEditing(false);
            return;
        }
        try {
            setIsSavingEdit(true);
            await editTweet(tweet.id, { content: editContent });
            setIsEditing(false);
        } catch (error) {
            console.log("Erro ao editar tweet", error);
        } finally {
            setIsSavingEdit(false);
        }
    }

    function handleCancelEdit() {
        setEditContent(tweet.content);
        setIsEditing(false);
    }

    return (
        <S.TweetCard>
            <S.TweetAvatar
                src={tweet.author.imageUrl ?? "/assets/avatar.png"}
                alt="avatar"
            />
            <S.TweetContent>
                <S.TweetHeader>
                    <S.TweetUser>{tweet.author.name}</S.TweetUser>
                    <S.TweetHandle>@{tweet.author.username}</S.TweetHandle>
                </S.TweetHeader>
                {isEditing ? (
                    <S.ReplyBox>
                        <S.EditInput
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            maxLength={300}
                            disabled={isSavingEdit}
                        />
                        <S.ReplyActions>
                            <S.ReplyCount>{300 - editContent.length}</S.ReplyCount>
                            <S.CancelButton onClick={handleCancelEdit} disabled={isSavingEdit}>
                                Cancelar
                            </S.CancelButton>
                            <S.ReplyButton
                                onClick={handleSaveEdit}
                                disabled={!editContent.trim() || isSavingEdit}
                            >
                                {isSavingEdit ? "Salvando..." : "Salvar"}
                            </S.ReplyButton>
                        </S.ReplyActions>
                    </S.ReplyBox>
                ) : (
                    <S.TweetText>{editContent}</S.TweetText>
                )}
                <S.TweetActions>
                    <S.ActionBtn onClick={() => setShowReply(!showReply)}>
                        💬 {repliesArray.length}
                    </S.ActionBtn>
                    <S.ActionBtn onClick={handleLike}>
                        {liked ? "❤️" : "🤍"} {likesCount}
                    </S.ActionBtn>
                {isOwner && (
                    <>
                        <S.ActionBtn onClick={() => setIsEditing(true)} disabled={isEditing}>
                            ✏️
                        </S.ActionBtn>
                        <S.ActionBtn onClick={handleDelete} disabled={isDeleting}>
                            {isDeleting ? "⏳" : "🗑️"}
                        </S.ActionBtn>
                    </>
                )}
                </S.TweetActions>

                {showReply && (
                    <S.ReplyBox>
                        <S.ReplyInput
                            placeholder="Escreva sua resposta..."
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            maxLength={300}
                            disabled={isSendingReply}
                        />
                        <S.ReplyActions>
                            <S.ReplyCount>{300 - replyContent.length}</S.ReplyCount>
                            <S.ReplyButton
                                onClick={handleReply}
                                disabled={!replyContent.trim() || isSendingReply}
                            >
                                {isSendingReply ? "Enviando..." : "Responder"}
                            </S.ReplyButton>
                        </S.ReplyActions>
                    </S.ReplyBox>
                )}

                {repliesArray.length > 0 && (
                    <S.RepliesList>
                        {repliesArray.map((r) => (
                            <S.ReplyItem key={r.id}>
                                <S.ReplyAvatar
                                    src={r.author?.imageUrl ?? "/assets/avatar.png"}
                                    alt="avatar"
                                />
                                <S.ReplyContent>
                                    <S.ReplyHeader>
                                        <S.TweetUser>{r.author?.name}</S.TweetUser>
                                        <S.TweetHandle>@{r.author?.username}</S.TweetHandle>
                                        {r.author?.id === user?.id && (
                                        <S.ActionBtn
                                            onClick={() => handleDeleteReply(r.id)}
                                            disabled={deletingReplyId === r.id}
                                        >
                                            {deletingReplyId === r.id ? "⏳" : "🗑️"}
                                        </S.ActionBtn>
                                    )}
                                    </S.ReplyHeader>
                                    <S.TweetText>{r.content}</S.TweetText>
                                </S.ReplyContent>
                            </S.ReplyItem>
                        ))}
                    </S.RepliesList>
                )}
            </S.TweetContent>
        </S.TweetCard>
    );
}