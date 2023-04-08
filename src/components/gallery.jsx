"use client";
  
import styles from "../components/gallery.module.css"
import Image from "next/image"
import { useState } from "react";
import getImageList from "../functions/getImageList"
import Modal from "../components/modal"




const Gallery = (props)  => {
 
    const[clickedImage,setClickedImage] = useState(null);
    const[currentIndex, setCurrentIndex] =useState(null);
    let gridImages =[]; /*Liste der anzuzeigenden Bilder */
    let type = props.id;
    gridImages = getImageList(type);
    
    
    const clickHandler = (image, index) => {
        setCurrentIndex(index);
        setClickedImage(image);
        console.log('handle Click+++++++', image, '  ', index)
    };

    const handleClickNext = () =>{
        const lengthImageGrid = gridImages.length;
        if (currentIndex + 1>= lengthImageGrid) {
            /*Versuch über das letzte Element hinauszublättern ==> Zurücksetzen an den Anfang*/
            setCurrentIndex(0);
            const firstImage = gridImages[0].full;
            setClickedImage(firstImage);
            console.log('------handleClickNext  ',firstImage);
            return;
        }
        const newIndex = currentIndex +1;
        const nextImage = gridImages.filter((image) => {
            return gridImages.indexOf(image) === newIndex;
        });
        const displayNextImage = nextImage[0].full;
        setClickedImage(displayNextImage);
        setCurrentIndex(newIndex);
    }


return(
<div className={styles.gallerygridcontainer}>
   
      
        {gridImages.map((image, index) => (
            <div className ={styles.griditem}
                key={index}
                
                onClick={() => {
                        clickHandler(image.full,index);
                    }
                }
            
            >
                 <Image 
                    src= {image.full}
                    alt={image.alt}
                    quality = {30}
                    width = {128}
                    height ={96}
                />
            </div>))
        }
        {clickedImage && (
        <Modal 
            clickedImage={clickedImage} 
            handleClickNext={handleClickNext}
            setClickedImage={setClickedImage}
            type={type}
        />)

        }
        
      
     
    
</div>
)
}

export default Gallery;


