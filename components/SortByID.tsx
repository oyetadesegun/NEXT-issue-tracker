import { Flex } from '@radix-ui/themes'
import React, { PropsWithChildren } from 'react'

const SortByID = ({children}: PropsWithChildren) => {
  return (

      <Flex>{children}<div className="flex flex-col ml-1">
              <div className="-mt-1 border">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9H11L7.5 4.5L4 9Z" fill="currentColor"></path></svg>
              </div>
              <div className="-mt-1 border">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path></svg>
              </div>
            </div></Flex>

  )
}

export default SortByID
