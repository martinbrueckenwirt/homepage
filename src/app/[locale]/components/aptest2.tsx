"use client"
import { use, useEffect } from 'react';
import { GalleryImage } from './types';
/*import imageList from '@/data/image';*/
import styles from "../components/gallery.module.css"
/*import styles from "./aptest.module.css"; */

import Image from 'next/image';
import { useState } from 'react';
import getImageList from '@/src/functions/getImageList';
/*
  <div className={styles.test}>
                        hallo            
                    </div>
                    <Image className={styles.image}
                    src={myLocalImage}
                    width={300}
                    height={300}
                    priority={true}
                    alt="Test"
                /> 
*/


export default function Aptest({appartmentTyp}): JSX.Element {
    // ...
    const [imageList, setImageList] = useState<GalleryImage[]>([]);
    const [isLoaded, setisloaded] = useState<boolean>(false);

 

    useEffect(() => {
            async function fetchData (appartementTyp) {
            const response = await getImageList(appartementTyp);
            
            if(response&&response.length>0)
                {
                    let myLocalImageList = response;
                    setImageList(myLocalImageList);
                    setisloaded(true);
                        
                }
                    };
        fetchData(appartmentTyp);
    }, []); 

    console.log('aptest imageList nach UseEffect:', imageList);

    useEffect(() => {
        if (isLoaded === true) {
            console.log(' Loaded im useEffect 1- true');
        }
        else{
            console.log('im useEffect 1- false');
        }

    }, [isLoaded]);

    function checkIsClicked(index) { 
        let       result = true 
        return result    
    }
    
    const clickHandler = (image, index) => {}

    console.log('aptest imageList nach UseEffect:', imageList);

    
    if (isLoaded === true) 
    {
        
        let myLocalImage=imageList[0].full;
        console.log(' Loaded Seitenaufbau- true ', imageList[0].full, 'myLocalImage', myLocalImage);
       
            return (
                <div>
                {imageList.map((image, index) => (
                    <div className ={styles.firstRun}
                       key={index}
                       onClick={() => {
                               clickHandler(image.full,index);
                           }
                       }
                    > 
                   <div className ={checkIsClicked(index) ? styles.gridItem : styles.red}>
                        <Image 
                           src= {image.small}
                           alt={image.alt}
                           quality = {30}
                           width = {128}
                           height ={96} 
                           /*fill */
                       />
                   </div>
                   </div>))
               }
               </div>
            );
       }    
}