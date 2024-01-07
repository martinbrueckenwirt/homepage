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
import getImageList from '../../../functions/getImageList';
import Modal from "./modal"




const Gallery = (props)  => {
 
    const[clickedImage,setClickedImage] = useState(null);
    const[currentIndex, setCurrentIndex] =useState(0);
    const[mobileImages, setMobileImages] = useState([]);
         
    let gridImages =[]; /*Liste der anzuzeigenden Bilder */
    let type = props.id;
    let resultGridImages = getImageList(type);
    gridImages = resultGridImages.slice(); /*Duplikat Desktopansicht */
    let mobileGridImagesFullLength = resultGridImages.slice(); /*Duplikat Handy; handyansicht zeigt immer 3 Bilder, fokus hat immer das mittlere Bild*/
    let  mobileGridImages =[];
    const lengthImageGrid = gridImages.length;


    function arrayRotate(arr, reverse) {
        if (reverse) arr.unshift(arr.pop());
        else arr.push(arr.shift());
        return arr;
      }
      /* usage:
      arrayRotate([1, 2, 3, 4, 5]);       // [2, 3, 4, 5, 1];
      arrayRotate([1, 2, 3, 4, 5], true); // [5, 1, 2, 3, 4]; */
      
    
        /*initialisierung */
      arrayRotate(mobileGridImagesFullLength,true); /* für Handy muss das letzte Element der Liste zum Start an linkester Position stehen */
      /*mobiles Array verkürzen auf 3 Einträge */
      mobileGridImages = mobileGridImagesFullLength.slice(0,3); /*nur die ersten 3 Elemente anzeigen */
      setMobileImages[mobileGridImages];

 

      function  updateMobile(index){
         let myGridPart =[];
        mobileGridImagesFullLength = resultGridImages.slice(); /* neues Duplikat erstellen*/
       
        if (index   == 0 ) /*1.Bild markiert */
        {
            myGridPart = mobileGridImagesFullLength.slice(-1);
            mobileGridImagesFullLength.unshift(myGridPart[0]);
            mobileGridImages =mobileGridImagesFullLength.slice(0,3);
        }
        else if ((index +1 ) == lengthImageGrid) /*letztes Bild markiert */
        {
            mobileGridImages = mobileGridImagesFullLength.slice(-2); /die letzten 2 Bilder */
            myGridPart = mobileGridImagesFullLength[0] /*1. Bild */
            mobileGridImages.push(myGridPart); /*das erste Element hinten anhängen*/
        }
        else   /*alle Bilder zwischen 1 und letztem Bild */ 
        {
            mobileGridImages = mobileGridImagesFullLength.slice(index-1,index+2);
        }

          /*  console.log('update Mobile......', mobileGridImages) */
            
            setMobileImages(mobileGridImages);
      }
    
      useEffect(() => {
            updateMobile(currentIndex);
           /* console.log ('im UseEffect  ',mobileGridImages) */
    },[currentIndex]);

    useEffect(() => {
        if ((!clickedImage) && (gridImages[0])) {
            setClickedImage(gridImages[0].full)
            setCurrentIndex(0);
            updateMobile(currentIndex);
        }
           
},[currentIndex, clickedImage]);


      const clickHandler = (image, index) => {
        /* Klick auf Desktop */
        setCurrentIndex(index);
        setClickedImage(image);
        updateMobile(index,image);
    
        };

        const clickHandlerMobile = (image, index) => {
                /*Klick auf Mobile */
                const lengthImageGrid = gridImages.length;
               /* console.log('clickHandlerMobile ',index);*/
                /*blättern rechts */
                if (index > 1){
                    /*über den rechten Rand hinausblättern*/
                    arrayRotate(mobileGridImagesFullLength); 
                    mobileGridImages = mobileGridImagesFullLength.slice(0,3);
                }  
                    if ((currentIndex+1) ==lengthImageGrid){
                        setCurrentIndex(0);    
                    }
                   
               
                if (index < 1){
                    arrayRotate(mobileGridImagesFullLength,true); 
                    mobileGridImages = mobileGridImagesFullLength.slice(0,3);
                    if ((currentIndex-1) < 0){
                        setCurrentIndex(lengthImageGrid-1);    
                    }
                    
                }
              setClickedImage(image);
       
            };

    const handleClickNext = () =>{
      /*  console.log('handleClickNext');*/
        /* mobile */
        arrayRotate(mobileGridImagesFullLength);
        mobileGridImages = mobileGridImagesFullLength.slice(1,3); /*nur die ersten 3 Elemente anzeigen */
        
        /*Desktop*/
        const lengthImageGrid = gridImages.length;
        if (currentIndex + 1>= lengthImageGrid) {
            /*Versuch über das letzte Element hinauszublättern ==> Zurücksetzen an den Anfang*/
            setCurrentIndex(0);
            const firstImage = gridImages[0].full;
            setClickedImage(firstImage);
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

    const handleClickPrev = () =>{
      /*  console.log('handleClickPrev');*/
         /* mobile */
        arrayRotate(mobileGridImagesFullLength,true);
        mobileGridImages = mobileGridImagesFullLength.slice(1,3); /*nur die ersten 3 Elemente anzeigen */
       
        /* Desktop */
        const lengthImageGrid = gridImages.length;
        /*Versuch über das 1. Element hinauszublättern ==> Zurücksetzen an das Ende*/
        if (currentIndex === 0){
            setCurrentIndex(lengthImageGrid-1)
            const lastImage = gridImages[lengthImageGrid-1].full;
            setClickedImage(lastImage);
            return;
        }
        const newIndex = currentIndex-1;
        const prevImage = gridImages.filter((image) => {
            return gridImages.indexOf(image) === newIndex;
        });
        const displayPrevImage = prevImage[0].full;
        setClickedImage(displayPrevImage);
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

function checkIsClickedMobile(index) { 

    /* in derMobilen Ansicht ist das aktive Bild in der Mitte fixiert */
    let result = false
    if (index > 1){
        arrayRotate(mobileGridImagesFullLength); 
        mobileGridImages = mobileGridImagesFullLength.slice(0,3);
    }
    if (index < 1){
        arrayRotate(mobileGridImagesFullLength,true); 
        mobileGridImages = mobileGridImagesFullLength.slice(0,3);
    }
    if (index == 1) {result = true} 

     return result    
}




return(
<div>
    
<div id="grid" className={styles.gallerygridcontainer}>
   
      
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
            clickedImage={clickedImage} 
            handleClickNext={handleClickNext}
            handleClickPrev={handleClickPrev}
            setClickedImage={setClickedImage}
            type={type}
        />)

        }
</div>
<div id="mobileGrid" className={styles.gallerygridcontainer}>
   
      
{mobileImages.map((mobileImage, mobileIndex) => (
     <div className ={styles.firstRun}
        key={mobileIndex}
        onClick={() => {
                clickHandlerMobile(mobileImage.full,mobileIndex);
            }
        }
     > 
    <div className ={checkIsClickedMobile(mobileIndex) ? styles.gridItem : styles.red}>
         <Image 
            src= {mobileImage.small}
            alt={mobileImage.alt}
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
    clickedImage={clickedImage} 
    handleClickNext={handleClickNext}
    handleClickPrev={handleClickPrev}
    setClickedImage={setClickedImage}
    type={type}
/>)

}
</div>

</div>

)

}

export default Gallery;


