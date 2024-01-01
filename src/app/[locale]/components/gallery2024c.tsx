"use client";
  /*https://www.youtube.com/watch?v=KNEbqO-q1r8*/
  /*muster: zb key-down-Event (Barriere Armut) https://github.com/igordanchenko/react-photo-album/tree/main/examples/lightbox */
  /* https://github.com/igordanchenko/yet-another-react-lightbox */


  /* todos:*a* */
    /*console.log raus*/
  /*Tastaturnav offen */
  /* thumbnails laden */
import styles from "../components/gallery.module.css"
import Image from "next/image"
import { useState, useEffect } from "react";
import Modal from "./modal" 
import getImageList from "../../../functions/getImageList"
import {GalleryImage} from "../components/types"
/*import Modal from "./modal_onlyIndex"*/




const Gallery = (props)  => {
 
    const[clickedImage,setClickedImage] = useState(null);
    const[currentIndex, setCurrentIndex] =useState(1); /*auf das 2. Element setzen, damit das 2. Bild in der Mitte ist */
    const [oldIndex, setOldIndex] = useState(1); /*analog currentindex */
    const[clickedForward, setClickedforward] = useState(false);
    
   
    let type:string = 'A';
   
    const myImageList:any = getImageList(type); // Get the list of images (from the file system
    let gridImages = myImageList.slice(0);
    let displayImages:GalleryImage[] = myImageList.slice(0,3);
       
    function arrayRotate(arr, reverse) {
        if (reverse) arr.unshift(arr.pop());
        else arr.push(arr.shift());
        return arr;
    }
   
    function rotateAndDeepCopy(arr, reverse)
    {
        const originalArray = arr;
        const rotatedArray = arrayRotate([...originalArray], reverse);
        const deepCopy = JSON.parse(JSON.stringify(rotatedArray));
        return deepCopy;
    }

       /* usage:
      arrayRotate([1, 2, 3, 4, 5]);       // [2, 3, 4, 5, 1];
      arrayRotate([1, 2, 3, 4, 5], true); // [5, 1, 2, 3, 4]; */

      function clickForward() {
        const copyImages=rotateAndDeepCopy(gridImages,false);
        const internalDisplayImages=copyImages.slice(0,3);
        return internalDisplayImages;
    
        }
          

        const clickHandler = (image:any, index:any):GalleryImage[] => {
            /*Click auf eines der Bilder in der 3er Liste*/   
                     
                 /*blättern rechts */
                if (index > oldIndex){
                    console.log('clickHandler vorher',displayImages, 'image ', image);
                    displayImages=clickForward(); 
                    setClickedforward(true);
                    displayImages[1]=null;
                    setClickedImage(image);
                   console.log('clickHandler nachher',displayImages, 'clickedImage', clickedImage);
                   
                       
                    return displayImages;
                }
        };

        const checkIsClicked = (index:any) => {
            return index === currentIndex;
        }

        useEffect(() => {
            if(displayImages.length>0 && clickedImage !== null  ){
            console.log('displayImages updated', displayImages, 'clickedImage ', clickedImage);
            
        }
        }, [displayImages, clickedImage]);


return(

    <>

    
<div id="grid" className={styles.gallerygridcontainer}>
   
      
        {displayImages.map((image, index) => (
             <div className ={styles.firstRun}
                key={index}
                onClick={() => {clickHandler(image.full,index)}
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

   
</>
)

}

export default Gallery;


export type GalleryImage = {
    small:string;
	full:string;
    teaser:boolean;
	description:string;
	descriptionEn:string;
	descriptionIt:string;
	alt: string;
	altEN:string;
	altIT:string;
	copyright: string;
	sortnumber:number;
}[];