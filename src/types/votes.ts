// src/types/votes.ts

export interface Vetes {
  good: number;
  neutral: number;
  bad: number;
}

export type VoteType = 'good' | 'neutral' | 'bad';