import { Box, Card, Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingDetailPage = () => {
  return (
      <Box className='max-w-xl'>
      <Skeleton/>
      <Flex gap="2" my="2">
         <Skeleton width="5rem"/>
          <Skeleton width="8rem"/>
      </Flex>
      <Card className="prose" mt='4'>
      <Skeleton count={3} />
      </Card>
    </Box>
  )
}

export default LoadingDetailPage
