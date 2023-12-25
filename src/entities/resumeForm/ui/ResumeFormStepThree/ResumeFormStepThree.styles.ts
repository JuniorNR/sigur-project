import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledStepThreeForm = styled('form')(() => ({
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