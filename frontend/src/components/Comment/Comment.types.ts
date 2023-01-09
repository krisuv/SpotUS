import { IPost } from '../Post/Post.types';

export type IComment = Omit<IPost, 'commentsCount' | 'publishDate' | 'votes'>;
