import { Box, Flex } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingNewIssuePage = () => {
  return (
    <Box className='max-w-xl'>
        <Skeleton height='2rem'/>
        <Skeleton height='20rem'/>
    </Box>
  )
}

export default LoadingNewIssuePage
