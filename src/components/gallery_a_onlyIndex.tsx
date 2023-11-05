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
import getImageList from "../functions/getImageList"
import Modal from "./modal_onlyIndex"

function getInitialImages() {
  let type = "typeA";
     var resultGridImages = [];
     resultGridImages=getImageList(type); 
     /*console.log('getstatic  ',resultGridImages); */
     return resultGridImages
   }



const GalleryA = ()  => {
 
    const[clickedImage,setClickedImage] = useState(false);
    const[currentIndex, setCurrentIndex] =useState(0);
    /*console.log('im Haupt'); */
    let gridImages =[]; /*Liste der anzuzeigenden Bilder */
       gridImages = getInitialImages();
    
    /*console.log(gridImages); */
    /*gridImages = imageList.slice(); /*Duplikat Desktopansicht */
 
    const lengthImageGrid = gridImages.length;


    useEffect(() => {
        if ((!clickedImage) && (gridImages[0])) {
              setCurrentIndex(0);

        }
           
},[currentIndex, clickedImage, gridImages]);


      const clickHandler = (image, index) => {
        /* Klick auf Desktop */
        setCurrentIndex(index);
        setClickedImage(true);
    
        };

      
              

    const handleClickNext = () =>{
      
        
        /*Desktop*/
        const lengthImageGrid = gridImages.length;
        if (currentIndex + 1>= lengthImageGrid) {
            /*Versuch über das letzte Element hinauszublättern ==> Zurücksetzen an den Anfang*/
            setCurrentIndex(0);
            const firstImage = gridImages[0].full;
        return;
        }
        const newIndex = currentIndex +1;
        setCurrentIndex(newIndex);
     }

    const handleClickPrev = () =>{
      /*  console.log('handleClickPrev');*/
     
  
       
        /* Desktop */
        const lengthImageGrid = gridImages.length;
        /*Versuch über das 1. Element hinauszublättern ==> Zurücksetzen an das Ende*/
        if (currentIndex === 0){
            setCurrentIndex(lengthImageGrid-1)
            return;
        }
        const newIndex = currentIndex-1;
        setCurrentIndex(newIndex);
    }

    
/*image fill; der A boolean that causes the image to fill the parent element instead of setting width and height.
The parent element must assign position: "relative", position: "fixed", or position: "absolute" style.*/


function checkIsClicked(index) { 
    let result = false
    if (index == currentIndex){
         result = true 
    }
  
     return result    
}


return(
<div>
    
<div className={styles.gallerygridcontainer}>
   
      
        {gridImages.map((image, index) => (
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
        {clickedImage && (
        <Modal 
            clickedImage={currentIndex} 
            handleClickNext={handleClickNext}
            handleClickPrev={handleClickPrev}
            imageList = {gridImages}
           
        />)

        }
</div>

</div>

)

}





  export default GalleryA;
