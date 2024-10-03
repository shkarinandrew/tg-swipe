import { HTMLAttributes } from 'react';

export interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
  count: number;
  maxCount: number;
}
