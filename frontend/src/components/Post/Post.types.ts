import { TComment } from '../Comment/Comment.types';

export type TTag = 'party' | 'uni' | 'edu' | 'help' | 'job' | 'event' | 'sponsored' | 'other' | string;

export const tags: Record<'label', TTag>[] = [
  { label: 'party' },
  { label: 'uni' },
  { label: 'edu' },
  { label: 'help' },
  { label: 'job' },
  { label: 'event' },
  { label: 'sponsored' },
  { label: 'other' }
];

export interface IPost {
  id: number;
  tag: TTag;
  username: string;
  content: string;
  publishDate: string;
  comments: TComment[]
  votes: number;
}

export type TCategoryColors = Record<TTag, string>;
