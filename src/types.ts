// src/types.ts

export interface User {
  name: string;
  avatar: string; // URL to the avatar image
}

export interface Post {
  id: number;
  user: User;
  content: string;
  timestamp: string;
  stats: Stat[][]; // Array of stat groups
  replies?: Post[];
  isReply?: boolean;
  extraIcon?: 'double-arrow';
}

export enum StatType {
  Text,
  Search,
  Copy,
  Copyright,
}

export interface Stat {
  type: StatType;
  value?: string;
}