import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";


export const StyledStepTwoForm = styled('form')(() => ({
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