import { Typography, styled } from '@mui/material'

export const SpanTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.blackGrey.main,
  marginRight: '0.25rem',
  marginLeft: '0.25rem'
}))
