'use client'
import React from 'react';
import { Button, ThemePanel } from '@radix-ui/themes';
import Link from 'next/link';


const Issues = () => {
  return (
    <div>
      <Button>
        <Link href='/issues/new'>New Issues</Link>
      </Button>
    </div>
  )
}
 
export default Issues