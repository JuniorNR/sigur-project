import styled from '@emotion/styled';
import { Box, Button, TextField, Typography } from '@mui/material';

export const StyledStepOneForm = styled('form')(() => ({
  maxWidth: '100%',
  width: '100%',
  display: 'flex',
  gap: '5px',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#fff',
}));

export const StyledFormGroup = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: '5px',
}));

export const VisuallyHiddenInput = styled('input')(() => ({
  cursor: 'pointer',
  opacity: 0,
  borderRadius: '0px',
  height: '100%',
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  whiteSpace: 'nowrap',
}));

export const StyledDatePickerTextField = styled(TextField)(() => ({
  backgroundColor: '#9a9a9a',
  minWidth: '250px',
  '& > *': {
    borderRadius: 0,
  },
  '& > label': {
    borderRadius: 0,
    color: '#fff',
  },
}));

export const StyledFilePickerButton = styled(Button)(() => ({
  cursor: 'pointer',
  borderRadius: '0px',
  minWidth: '250px',
}));

export const StyledFilePickerTypography = styled(Typography)(() => ({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  fontSize: '14px',
}));
