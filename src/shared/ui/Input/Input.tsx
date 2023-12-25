import { forwardRef, memo } from 'react';
import { TextField } from "@mui/material";
import { StyledInput } from './Input.styles';

const InputComponent = memo(forwardRef<HTMLInputElement, React.ComponentProps<typeof TextField>>((props, ref) => {

  return (
    <StyledInput type ='text' ref={ref} variant='filled' color='primary' fullWidth { ...props } />
  );
}));

InputComponent.displayName = 'Input';

export const Input = InputComponent;