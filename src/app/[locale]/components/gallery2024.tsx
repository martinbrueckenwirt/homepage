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
    const [image1, setImage1] = useState<GalleryImage | null>();
    const [image2, setImage2] = useState<GalleryImage | null>();
    const [image3, setImage3] = useState<GalleryImage | null>();
    
   
    let type:string = 'A';
   
    const myImageList:any = getImageList(type); // Get the list of images (from the file system
    let gridImages = myImageList.slice(0);
    let lengthGridImages = gridImages.length;  

    function init(){
        console.log('gallery2024 init ',gridImages);
        setImage1(gridImages[0]);
        setImage2(gridImages[1]);
        setImage3(gridImages[2]);
    }
    
      
        useEffect(() => { init();
        },[]);


        /*Bilder scrollen*/
        useEffect
        (() => { if(clickedImage){
          
          console.log('currentIndex update');
        if (currentIndex === 0){
          console.log('gallery2024 Stelle1 ', 'currentIndex', currentIndex, 'oldIndex', oldIndex);
          setImage1(gridImages[lengthGridImages-1])
          setImage2(gridImages[currentIndex]);
          setImage3(gridImages[currentIndex+1]);
                   
        }
   
        
        if (currentIndex === -1){
          console.log('gallery2024 Stelle2 ', 'currentIndex', currentIndex, 'oldIndex', oldIndex);
          setImage1(gridImages[(lengthGridImages-2)])
          setImage2(gridImages[(lengthGridImages-1)]);
          setImage3(gridImages[0]);
        }
        
        if (currentIndex > 1 ){
          console.log('gallery2024 Stelle3 ', 'currentIndex', currentIndex, 'oldIndex', oldIndex);
          setImage1(gridImages[currentIndex-2])
          setImage2(gridImages[currentIndex-1]);
          setImage3(gridImages[currentIndex]);

        }
        
        if (currentIndex === 1){
          console.log('gallery2024 Stelle4 ', 'currentIndex', currentIndex, 'oldIndex', oldIndex);
          setImage1(gridImages[lengthGridImages-1])
          setImage2(gridImages[currentIndex-1]);
          setImage3(gridImages[currentIndex]);
        }
        
        if (currentIndex === lengthGridImages){
          console.log('gallery2024 Stelle4 ', 'currentIndex', currentIndex, 'oldIndex', oldIndex);
          setImage1(gridImages[lengthGridImages-2])
          setImage2(gridImages[lengthGridImages-1]);
          setImage3(gridImages[0]);
        }
        


        if (currentIndex < 0){
          setOldIndex(lengthGridImages-1);}
        else if (currentIndex === lengthGridImages){
          setOldIndex(0);
        }
        else {
          setOldIndex(currentIndex);
        }
      }
        },[currentIndex]);

       

        const clickHandler = (image:any) => {
            /*Click auf das mittlere der Bilder in der 3er Liste*/   
            /* kein Scrollen*/         
            setClickedImage(image);
            setCurrentIndex(oldIndex);
                                                    
            setImage1(gridImages[currentIndex-1])
            setImage2(gridImages[currentIndex]);
            setImage3(gridImages[currentIndex+1]);
            
        }
   
        const clickHandlerPrev = (image:any) => {
          /*Click auf das linke der Bilder in der 3er Liste oder auf den Pfeil nach links*/   
          /* kein Scrollen*/         
            setClickedImage(image);
            
            console.log('gallery2024 clickHandlerPrev eingang', 'currentIndex', currentIndex, 'oldIndex', oldIndex);

            setCurrentIndex(oldIndex-1);
            /* Logik ist im UseEffect */

            console.log('clickHandlerPrev ausgang', 'currentIndex', currentIndex, 'oldIndex', oldIndex);
            return;
          }

          
        const clickHandlerNext = (image:any) => {
          /*Click auf das linke der Bilder in der 3er Liste oder auf den Pfeil nach links*/   
          /* kein Scrollen*/         
            setClickedImage(image);
            
            console.log('gallery2024 clickHandlerNext eingang', 'currentIndex', currentIndex, 'oldIndex', oldIndex);

            setCurrentIndex(oldIndex+1);
            /* Logik ist im UseEffect */

            console.log('clickHandlerNext ausgang', 'currentIndex', currentIndex, 'oldIndex', oldIndex);
            return;
          }
            
        
            
         

                                                    
           


  const checkIsClicked = (index:any) => {
      return index === currentIndex;
  }

        


return(

    <>
<p>hallo</p>
<div className={styles.gallerygridcontainer}>
   
      <div onClick={() => {clickHandlerPrev(image1.full)}}
      >
        {image1 && (  
          <Image 
            src= {image1.small}
            alt={image1.alt}
            quality = {30}
            width = {128}
            height ={96} 
            /*fill */
          />  
        )}
        </div>

      <div onClick={() => {clickHandler(image2.full)}}
      >
        {image2 && (
          <Image 
            src= {image2.small}
            alt={image2.alt}
            quality = {30}
            width = {128}
            height ={96} 
            /*fill */
            />  
    )}
      </div>
      <div onClick={() => {clickHandlerNext(image3.full)}}
       >
       {image3 && (
          <Image 
            src= {image3.small}
            alt={image3.alt}
            quality = {30}
            width = {128}
            height ={96} 
            /*fill */
          />  
                  )}
        </div>
     
        
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