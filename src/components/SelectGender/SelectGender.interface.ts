import { HTMLAttributes } from 'react';

export interface SelectGenderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  onClick: (type: GenderType) => void;
}
export type GenderType = 'male' | 'female';
