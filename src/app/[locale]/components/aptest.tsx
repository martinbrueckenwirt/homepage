"use client"
import { useEffect } from 'react';
import imageList from '@/data/image';
import Image from 'next/image';
import { useState } from 'react';

export default function Aptest(props: AppartmentModuleProps) {
    let localImage: ImageData;
    let localAlt: string = "Alt";
    const [isLoaded, setIsLoaded] = useState(false);

    function init() { 
        console.log('aptest init');
        localImage = imageList[1].full;
        setIsLoaded(true);
    }

    useEffect(() => {
        console.log('imageList:', localImage);
       
        // Add your logic here using the imageList variable
    }, [localImage]);

    useEffect(() => {
         init();
    },[])
    

    return (
        <>
            {isLoaded && (
                <Image
                    src={localImage}
                    width={300}
                    height={300}
                    priority={true}
                    alt={localAlt}
                />)}
        </>
    );





}