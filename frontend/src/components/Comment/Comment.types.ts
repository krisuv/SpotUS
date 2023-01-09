import { IPost } from '../Post/Post.types';

export type TComment = Omit<IPost, 'commentsCount' | 'publishDate' | 'votes' | 'tag'>;
