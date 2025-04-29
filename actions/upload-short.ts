'use server'
import { auth } from '@clerk/nextjs/server'
import { z } from 'zod'

const uploadShortSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(5),
    video: z.string(),
})

type UploadShortsState = {
    errors: {
        title?: string[],
        description?: [],
        video?: string[],
        formError?: string[],
    }
}

const uploadShortsAction = async (prevState: UploadShortsState, formData: FormData) : Promise<UploadShortsState> => {
    const result = uploadShortSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description') as string,
        Video: formData.get('video') as string,
    });
    if (!result.success) {
        return{
            errors:result.error.flatten().fieldErrors
        }
    }

    // clerk authentication.
    const {userId} = await auth();

    return{
        errors:{}
    }
}