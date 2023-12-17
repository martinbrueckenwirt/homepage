"use client";

import Image from 'next/image';
import image from '../../data/image'
import styles from '../components/galleryViewer.module.css'
import getImageToEnlarge from '../functions/getImageToEnlarge';
import Backdrop from "./backdrop";
import { useState } from "react";
import { useEffect } from 'react';
import { useMemo } from 'react';





const GalleryViewer = (props) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState();
    const [selectedImage, setSelectedImage] = useState();


    let imageData ={
        index:Number,
        description:String,
        alt:String,
        copyright:String,
        height:Number, 
        width:Number,
        priority:Boolean
    }

 

    useEffect( () => {

        async function getResponse(){
            try {
                const data = await getImageToEnlarge(props.enlargeImage, props.type)
                .then((result) => {
                
                    imageData.index = result.index;
                    imageData.description = result.description;
                    imageData.alt = result.alt;
                    imageData.copyright = result.copyright;
                    imageData.height = result.height;
                    imageData.width = result.width;
                    imageData.priority = result.priority;
                    console.log('im Promise   imageData',imageData.description);
                    console.log('im Promise   imageData alt',imageData.alt);
                    console.log('im Promise   imageData enlargeImage ',result.enlargeImage);
                    setSelectedImageIndex(imageData.index);
                    setSelectedImage(result.enlargeImage);
                    return imageData;
                }
                )
            }
                         
            catch (e) {
                return null;
            }



    }
    getResponse();
    
        }, [imageData, props.enlargeImage, props.type, selectedImageIndex]
    )
    


    /*imageData = getImageToEnlarge(props.enlargeImage, props.type);*/
  


console.log(' getImageToEnlarge nach dem Promise imageData  ',imageData.description);
console.log(' getImageToEnlarge nach dem Promise selectedImage',selectedImageIndex);
console.log(' getImageToEnlarge nach dem Promise alt', imageData.alt);
/*{selectedImage && < Backdrop clickhandler={setIndexImage} />} */
return ( 
<div>
<div className="background"> {imageData.description}</div>
    
        <Image
            src={selectedImage}
            alt={imageData.alt}
            height={300}
            width={400}
		></Image>
        <div> im GalleryViewr nach dem Laden der Daten</div>  
    
  </div>
)
};

export default GalleryViewer;