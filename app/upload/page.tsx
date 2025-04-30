'use client'
import { uploadShortsAction } from '@/actions/upload-short'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useActionState, useState } from 'react'

const page = () => {
    const [formState, action, isPending] = useActionState(uploadShortsAction, { errors: {} });

    const [videoUrl, setVideoUrl] = useState<string>("");

    const handleSubmit = (formData: FormData) => {
        formData.append("video", videoUrl);
        return action(formData);
    }

    return (
        <div className='max-w-md mx-auto p-6'>
            <h1 className='mb-6 text-2xl font-bold text-center'>Upload Shorts</h1>
            <form action={handleSubmit}>
                <div className='mb-4'>
                    <Label>Title</Label>
                    <Input
                        type='text'
                        name='title'
                        placeholder='Title'
                        className=''
                    />
                    {
                        formState.errors.title && <span className='text-red-500 text-sm'>{formState.errors.title}</span>
                    }
                </div>
                <div className='mb-4'>
                    <Label>Description</Label>
                    <Input
                        type='text'
                        name='description'
                        placeholder='Description'
                        className=''
                    />
                    {
                        formState.errors.description && <span className='text-red-500 text-sm'>{formState.errors.description}</span>
                    }
                </div>
                <div className='mb-4'>
                    <Label>Upload file</Label>
                    <Input
                        type='file'
                        className=''
                    />
                </div>
                <Button type='submit'>Upload</Button>
            </form>
        </div>
    )
}

export default page
