import { Box, Stack, Typography, styled } from '@mui/material'

const SeparationBox = () => {
  const DivBox = styled(Box)(({ theme }) => ({
    height: '0.0625rem',
    width: '4rem',
    backgroundColor: theme.palette.blackGrey.main
  }))

  const SpanTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.blackGrey.main,
    marginRight: '0.25rem',
    marginLeft: '0.25rem'
  }))

  return (
    <Stack flexDirection={`row`} alignItems={'center'} marginBottom={'0.75rem'}>
      <DivBox></DivBox>
      <SpanTypography>OR</SpanTypography>
      <DivBox></DivBox>
    </Stack>
  )
}

export default SeparationBox
