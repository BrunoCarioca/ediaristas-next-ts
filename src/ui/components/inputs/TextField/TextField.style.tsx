import { styled, TextField, TextFieldProps } from '@mui/material';
//import { TextFieldProps } from './TextField';

export const TextFieldStyled = styled(TextField)<TextFieldProps>`
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }

  .MuiOutLineInput-notchedOutLine {
    border-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;
