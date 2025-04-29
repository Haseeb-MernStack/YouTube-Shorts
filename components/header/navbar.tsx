import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { ModeToggle } from '../mode-toggle'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

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
            <div className='flex items-center space-x-2'>
                <Link href={'/upload'}>
                <Button><Plus /> Create</Button>
                </Link>
                <header className="flex justify-end items-center p-4 gap-4 h-16">
                    <SignedOut>
                        <SignInButton>
                            <Button>
                                Sign In
                            </Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button>
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </header>
                <ModeToggle />
            </div>
        </div>
    )
}

export default navbar
