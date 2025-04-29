import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

const navbar = () => {
    return (
        <div className='h-14 flex items-center justify-between'>
            {/* logo text */}
            <div>
                <h1 className='text-xl font-bold'>YT<span className='text-red-500'>Shorts</span></h1>
            </div>
            {/* Search input field */}
            <div className='w-1/2'>
                <Input
                    type='text'
                    placeholder='Search...'
                />
            </div>
            {/* Account management */}
            <div>
                <Button><Plus /> Create</Button>
            </div>
        </div>
    )
}

export default navbar
