export type TTag = 'party' | 'uni' | 'edu' | 'help' | 'job' | 'event' | 'sponsored' | 'other';

export const tags: TTag[] = ['party', 'uni', 'edu', 'help', 'job', 'event', 'sponsored', 'other'];

export interface IPost {
  id: string;
  tag: TTag;
  username: string;
  content: string;
  commentsCount: number;
  publishDate: string;
  votes?: number;
}

export type TCategoryColors = Record<TTag, string>;
