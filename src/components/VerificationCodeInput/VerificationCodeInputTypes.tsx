import { CSSProperties } from 'react';

export interface OTPInputProps {
  length: number;
  onChangeOTP: (otp: string) => any;

  autoFocus?: boolean;
  isNumberInput?: boolean;
  disabled?: boolean;

  style?: CSSProperties;
  className?: string;

  inputStyle?: CSSProperties;
  inputClassName?: string;
}

export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
}