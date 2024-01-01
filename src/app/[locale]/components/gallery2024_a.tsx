"use client";
  /*https://www.youtube.com/watch?v=KNEbqO-q1r8*/
  /*muster: zb key-down-Event (Barriere Armut) https://github.com/igordanchenko/react-photo-album/tree/main/examples/lightbox */
  /* https://github.com/igordanchenko/yet-another-react-lightbox */


  /* todos:*a* */
    /*console.log raus*/
  /*Tastaturnav geht nicht */
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
    const[oldIndex,setOldIndex] = useState(1); /*analog currentindex */
 
    let gridImages: GalleryImage[] = []; /* Kopie der Liste aller Bilder */
    let displayImages: GalleryImage[] = []; /*Liste der anzuzeigenden Bilder */
    let copyImages: [] = []; /*Liste der anzuzeigenden Bilder */
    let image: GalleryImage;
    let type = props.id;
    type ='A'
    gridImages = getImageList(type);

  
    const lengthImageGrid = gridImages.length;
    displayImages = [];
    displayImages = gridImages.slice(0, 3);  
    console.log('gallery2024 Init grid images ',gridImages)/*
das array aller potentiellen Bilder wird kopiert => gridImages
dieses Array wird mittels rotate so verschoben, dass das aktuelle Bild immer an 2.! Stelle steht (=Index1)
Damit ist sichergestellt, dass bei Desktopansicht das Bild in der Mitte ist
Bei Mobile wird nur 1 Bild dargestellt. Dieses ist immer das mittlere Bild.
 */

  
   /* function arrayRotate(gridImages:GalleryImage[], reverse:boolean) {
        console.log('gallery2024 VOR arrayRotate ',gridImages,'reverse ',reverse);
        displayImages =[];
        
        if (reverse) gridImages.unshift(gridImages.pop());
        else gridImages.push(gridImages.shift());

        console.log('gallery2024 NACH arrayRotate ',gridImages,'reverse ',reverse);
        displayImages = gridImages.slice(0, 3);
        console.log('gallery2024 NACH arrayRotate DISPLAY',displayImages,'reverse ',reverse);
        return displayImages
      }
      */
      /*function arrayRotate(arr, reverse) {
        console.log('gallery2024 VOR arrayRotate ',arr,'reverse ',reverse);
        if (reverse) arr.unshift(arr.pop());
        else arr.push(arr.shift());
        console.log('gallery2024 NACH arrayRotate DISPLAY',arr,'reverse ',reverse);
        return arr;
      }*/

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
      
    
        /*initialisierung */

        useEffect(() => {
            if ((!clickedImage) && (gridImages[0])) {
                setCurrentIndex(1);
          }   
            console.log('im useEffect ', displayImages, gridImages);
          
          },[displayImages, gridImages, clickedImage]);

    

        const clickHandler = (image, index) => {
            /*Click auf eines der Bilder in der 3er Liste*/   
            console.log('clickHandler Eingang current',currentIndex,'oldIndex ',oldIndex, 'image ',image,'index ',index);

            
                 /*blättern rechts */
                if (index > oldIndex){
                    /*blättern rechts*/
                    console.log('clickHandler displayImages rechts',displayImages, 'gridImages ',gridImages);

                    displayImages=[];
                    copyImages=[];
                    copyImages=rotateAndDeepCopy(gridImages,false);
                    gridImages=[];
                    gridImages=[...copyImages]; 
                    displayImages=[...gridImages].slice(0,3);
                    console.log('clickHandler displayImages nach dem rotate rechts',displayImages, 'gridImages ',gridImages);
                    setOldIndex(currentIndex);
                    
                    setCurrentIndex(1);
                    }  
                    if (currentIndex==oldIndex){
                        /*nix tun */
                    }
                    
                /*blättern links */
                if (index < oldIndex){
                    displayImages=[];
                    displayImages=rotateAndDeepCopy(gridImages,true).slice(0,3); 
                    setOldIndex(currentIndex);  
                    setCurrentIndex(1);                  }
            
            setClickedImage(image);
    
        };

    const handleClickNext = () =>{
        console.log('gallery2024 handleClick next ');
        displayImages=arrayRotate(gridImages,true); 
        setCurrentIndex(1);
        setOldIndex(1);
        }

    const handleClickPrev = () =>{
        console.log('gallery2024 handleClick prev ');
        displayImages=arrayRotate(gridImages,false); 
        setCurrentIndex(1);
        setOldIndex(1);
        }

    
/*image fill; der A boolean that causes the image to fill the parent element instead of setting width and height.
The parent element must assign position: "relative", position: "fixed", or position: "absolute" style.*/


function checkIsClicked(index) { 
  
    let result = false
    if (index == currentIndex-1){
         result = true 
        
    }
  
     return result    
}






return(

    <>
<div>
    
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
       
       {/*}
        {clickedImage && (
        <Modal 
            clickedImage={clickedImage} 
            handleClickNext={handleClickNext}
            handleClickPrev={handleClickPrev}
            setClickedImage={setClickedImage}
            type={type}
        />)
        */}
        
</div>
<div id="mobileGrid" className={styles.gallerygridcontainer}>
   
      
{displayImages.map((image, index) => (
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

{/*}
=====
{clickedImage && (
<Modal 
    clickedImage={clickedImage} 
    handleClickNext={handleClickNext}
    handleClickPrev={handleClickPrev}
    setClickedImage={setClickedImage}
    type={type}
/>)

}  
========
*/}

</div>

</div>
</>
)

}

export default Gallery;


