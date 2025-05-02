'use client'
import type { Prisma } from '@/lib/generated/prisma';
import React from 'react';
import { Card, CardFooter } from '../ui/card';
import { IKVideo, ImageKitProvider } from 'imagekitio-next';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useUser } from '@clerk/nextjs';

const urlEndPoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ShortCardProps = {
    short: Prisma.ShortsGetPayload<{
        include: {
            user: {
                select: {
                    name: true;
                    email: true;
                }
            }
        }
    }>
}

const ShortCard: React.FC<ShortCardProps> = ({ short }) => {
    // Move the hook call here, so it's unconditionally invoked
    const { user, isLoaded } = useUser();

    // Check if the environment variable exists
    if (!urlEndPoint) {
        console.error("NEXT_PUBLIC_URL_ENDPOINT is not defined.");
        return null; // Optionally return a fallback or error component
    }

    if (!isLoaded) {
        return <div>Loading...</div>; // Add loading state
    }

    return (
        <Card className="p-0 w-[360px] h-[640px] flex flex-col items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <ImageKitProvider urlEndpoint={urlEndPoint}>
                <IKVideo
                    path={short.url.replace(urlEndPoint, "")}
                    transformation={[{ height: "640", width: "360", format: "mp4" }]} // Optionally remove format if needed
                    controls
                    autoPlay={false}
                    controlsList="nodownload"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </ImageKitProvider>

            {/* Channel information */}
            <CardFooter className="absolute bottom-20 -left-2 text-white">
                <div>
                    <div className="flex items-center space-x-2">
                        <Avatar>
                            {user && (
                                <AvatarImage
                                    src={user.imageUrl || '/default-avatar.jpg'} // Fallback image
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full"
                                />
                            )}
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <h3 className="font-semibold">{short.title}</h3>
                            <span className="text-sm">{short.user.name}</span>
                        </div>
                    </div>
                    <div className="text-sm mt-2">
                        <p>{short.description}</p>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ShortCard;
