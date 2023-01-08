export interface IPost {
  id: string;
  tag: string;
  username: string;
  content: string;
  commentsCount: number;
  publishDate: string;
  votes?: number;
}