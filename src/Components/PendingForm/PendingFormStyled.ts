import { Stack, styled } from '@mui/material'

export const PendingFormWrapper = styled(Stack)({
  background: 'rgba( 255, 255, 255, 0.25 )',
  boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
  backdropFilter: 'blur( 3px )',
  borderRadius: '10px',
  border: '1px solid rgba( 255, 255, 255, 0.18 )',
  height: '50%',
  width: '50%',
  padding: '20px',
  justifyContent: 'space-around'
})
