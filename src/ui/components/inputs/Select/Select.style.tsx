import { Select, styled } from '@mui/material';

export const SelectStyled = styled(Select)`
    &.MuiInputBase-root {
        background-color: ${({ theme }) => theme.palette.grey[50]};
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.palette.grey[100]};
    }
`;
