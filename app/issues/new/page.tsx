'use client'
import { Button, Callout, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios'
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
}
const NewIssue = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  console.log(register('title'))
  const [error, setError] = useState('')
  return (
    <div className='max-w-xl'>
     {error && <Callout.Root color="red" className='mb-5'> 
      <Callout.Text>{error}</Callout.Text>
      </Callout.Root>}
    <form className='max-w-xl p-5 space-y-3' onSubmit={handleSubmit(async (data) => {
      try {
         await axios.post('/api/issues', data);
      router.push('/issues');
      } catch (error) {
        setError('An unexpected error occurred.')
      }
     
    })}>
      <TextField.Root placeholder='Title' {...register('title')} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE placeholder='Description' {...field} />}
      />

      <Button>Submit New Issue</Button>
    </form>
    </div>
  )
}

export default NewIssue