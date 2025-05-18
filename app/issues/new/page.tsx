'use client'
import { Button, TextField } from '@radix-ui/themes';
import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const NewIssue = () => {
  return (
    <div className='max-w-xl p-5 space-y-3'>
        <TextField.Root  placeholder='Title'/>
        <SimpleMDE placeholder='Description'/>
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssue