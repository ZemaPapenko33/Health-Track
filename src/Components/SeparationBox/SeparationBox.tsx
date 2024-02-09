import { Stack } from '@mui/material'
import { DivBox, SpanTypography } from './Styles'
import { useTranslation } from 'react-i18next'

const SeparationBox = () => {
  const { t } = useTranslation()

  return (
    <Stack flexDirection={`row`} alignItems={'center'} marginBottom={'0.75rem'}>
      <DivBox />
      <SpanTypography>{t('t-or')}</SpanTypography>
      <DivBox />
    </Stack>
  )
}

export default SeparationBox
