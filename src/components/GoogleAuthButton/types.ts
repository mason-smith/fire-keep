import { ButtonHTMLAttributes } from 'react';

export interface GoogleAuthButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}
