import { Box, Typography, styled } from '@mui/material'

export const DivBox = styled(Box)(({ theme }) => ({
  height: '0.0625rem',
  width: '4rem',
  backgroundColor: theme.palette.blackGrey.main
}))

export const SpanTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.blackGrey.main,
  marginRight: '0.25rem',
  marginLeft: '0.25rem'
}))
