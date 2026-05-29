import type { IUserBasic } from "./typesAuth.ts";

export interface INewTweet {
    content: string;
}

export interface INewTweetResponse {
    id: string;
    content: string;
    authorId: string;
    type: TweetType;
    createdAt: string;
}

export type TweetType = "NORMAL" | "REPLY";

export interface ICreateReply {
    content: string;
    replyTo: string;
}

export interface IGetTweetResponse {
    id: string;
    content: string;
    type: TweetType;
    createdAt: string;
    updatedAt: string;
    author: IUserBasic;
    likes: { author: IUserBasic; createdAt: string; updatedAt: string }[]; // ← array de objetos
    replies: IGetTweetResponse[]; // ← replies completos
}

export interface ITweetId {
    tweetId: string;
}

export interface ILikeResponse {
    success?: boolean;
}

export interface IApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}