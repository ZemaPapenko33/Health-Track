import { Stack } from '@mui/material'
import { DivBox, SpanTypography } from './Styles'

const SeparationBox = () => {
  return (
    <Stack flexDirection={`row`} alignItems={'center'} marginBottom={'0.75rem'}>
      <DivBox />
      <SpanTypography>OR</SpanTypography>
      <DivBox />
    </Stack>
  )
}

export default SeparationBox
