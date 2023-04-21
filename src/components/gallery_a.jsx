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
import Modal from "../components/modal"




const GalleryA = (props)  => {
 
    const[clickedImage,setClickedImage] = useState(null);
    const[currentIndex, setCurrentIndex] =useState(0);
    console.log(props);
    let imageList = [];
    imageList = props.resultGridImages;
    let gridImages =[]; /*Liste der anzuzeigenden Bilder */
    
    console.log(imageList);
    /*gridImages = imageList.slice(); /*Duplikat Desktopansicht */
 
    const lengthImageGrid = gridImages.length;


    
 

 

      
    


    useEffect(() => {
        if ((!clickedImage) && (gridImages[0])) {
            setClickedImage(gridImages[0].full)
            setCurrentIndex(0);

        }
           
},[currentIndex, clickedImage]);


      const clickHandler = (image, index) => {
        /* Klick auf Desktop */
        setCurrentIndex(index);
        setClickedImage(image);
    
        };

      
              

    const handleClickNext = () =>{
      
        
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

</div>

)

}



export function getStaticProps(context) {
 let type = "typeA";
    var resultGridImages = [];
    resultGridImages=getImageList(type); 
    console.log('getstatic  ',resultGridImages);
    return {
      props: {
        resultGridImages,
      },
    };
  }

  export default GalleryA;
