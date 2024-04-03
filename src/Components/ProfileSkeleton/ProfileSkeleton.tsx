import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const ProfileSkeleton = () => {
  return (
    <Stack width={'90%'} height={'50%'} direction={'row'} justifyContent={'space-around'}>
      <Skeleton animation="wave" variant="rounded" height={'100%'} width={'33%'} />
      <Skeleton animation="wave" variant="rounded" height={'100%'} width={'33%'} />
      <Skeleton animation="wave" variant="rounded" height={'100%'} width={'33%'} />
    </Stack>
  )
}

export default ProfileSkeleton
