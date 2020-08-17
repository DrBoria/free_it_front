/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useRef, useLayoutEffect } from 'react';

import usePrevious from './usePrevious';

import { SingleOTPInputProps } from './VerificationCodeInputTypes';

const SingleOTPInput: FC<SingleOTPInputProps> = ({ focus, autoFocus, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return <input ref={inputRef} {...rest} />;
};

export default SingleOTPInput;
