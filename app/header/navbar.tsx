import React from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react'
import Image from 'next/image';
import short from "@/public/shorts.webp";

const navbar = () => {
    return (
        <div className='h-14 flex items-center justify-between'>
            {/* logo text */}
            <div className='flex items-center gap-x-2'>
                <h1 className='text-xl font-bold'>YT<span className='text-red-500'>Sho<span className='text-white'>r</span>ts</span></h1>
                <Image src={short} alt='logo' height={12} width={12} />
            </div>
            {/* Search input field */}
            <div>
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
