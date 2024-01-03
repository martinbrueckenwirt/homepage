 "use client"
  /*https://www.youtube.com/watch?v=KNEbqO-q1r8*/
  /*muster: zb key-down-Event (Barriere Armut) https://github.com/igordanchenko/react-photo-album/tree/main/examples/lightbox */
  /* https://github.com/igordanchenko/yet-another-react-lightbox */


  /* todos:*a* */
    /*console.log raus*/
  /*Tastaturnav offen */
  /* thumbnails laden */
import styles from "../components/gallery.module.css"
import Image, { StaticImageData } from "next/image"
import { useState, useEffect } from "react";
import Modal from "./modal" 
import getImageList from "../../../functions/getImageList"
import { GalleryImage } from "../components/types"
import bild from "../../../../public/P1210796_web.jpg"





const Gallery = (props)  => {
 
    const[clickedImage,setClickedImage] = useState(null);
    const[currentIndex, setCurrentIndex] =useState(1); /*auf das 2. Element setzen, damit das 2. Bild in der Mitte ist */
    const [oldIndex, setOldIndex] = useState(1); /*analog currentindex */
    const [image1, setImage1] = useState<StaticImageData>();
    const [image2, setImage2] = useState<GalleryImage | null>();
  const [image3, setImage3] = useState([]);
  const[imageName, setImageName] = useState("");
     
   
    let type:string = 'A';
   
    const myImageList:any = getImageList(type); // Get the list of images (from the file system
    let gridImages = myImageList.slice(0);
    let lengthGridImages = gridImages.length;  

    function init(){
        console.log('gallery2024 init ',gridImages);
      setImage1(gridImages[0]);
      setImageName(gridImages[0].full);
        setImage2(gridImages[1]);
      setImage3(gridImages[2]);
      
      console.log(image1);
    }
    
      
        useEffect(() => { init();
        },[]);


        /*Bilder scrollen*/
        useEffect
        (() => { if(clickedImage){
          
         
        if (currentIndex === 0){
          
          setImage1(gridImages[lengthGridImages-1])
          setImage2(gridImages[currentIndex]);
          setImage3(gridImages[currentIndex+1]);
                   
        }
   
        
        if (currentIndex === -1){
          
          setImage1(gridImages[(lengthGridImages-2)])
          setImage2(gridImages[(lengthGridImages-1)]);
          setImage3(gridImages[0]);
        }
        
        if (currentIndex > 1 ){
          
          setImage1(gridImages[currentIndex-2])
          setImage2(gridImages[currentIndex-1]);
          setImage3(gridImages[currentIndex]);

        }
        
        if (currentIndex === 1){
          
          setImage1(gridImages[lengthGridImages-1])
          setImage2(gridImages[currentIndex-1]);
          setImage3(gridImages[currentIndex]);
        }
        
        if (currentIndex === lengthGridImages){
          
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

<div className={styles.gallerygridContainer}>
  
 
  <div className={styles.wrapper}>

      <div className={styles.box1ArrowLeft} onClick={() => {clickHandlerPrev(image2.full)}}>
          <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M11.546.57.698 10.994l-.09.08c-.363.35-.576.813-.608 1.364l.002.185c.03.49.243.954.664 1.354l-.005-.008 10.885 10.462a2.061 2.061 0 0 0 2.845 0 1.964 1.964 0 0 0 0-2.844l-9.403-9.03 9.403-9.144a1.964 1.964 0 0 0 0-2.844 2.061 2.061 0 0 0-2.845 0Z" 
            fill="#1C1C1F"/>
          </svg>
      </div>
   
      <div className={styles.box2BildLinks} onClick={() => {clickHandlerPrev(image1.full)} }
        >
          {image1 && (
            <img src='/P1210796_web.jpg' alt='ttest' />
          )}
          
        
          {image1 && (
            <Image className={styles.image}
              src='/public/P1210796_web.jpg'
              alt={image1.alt}
            quality = {75}
            width = {940}
            height ={705} 
            /*fill */ 
          />  
        )}
        </div>

      <div className={styles.box3BildMitte} onClick={() => {clickHandler(image2.full)}}
      >
        {image2 && (
          <Image className={styles.image}
            src= {image2.small}
            alt={image2.alt}
            quality = {75}
            width = {940}
            height= {705} 
            /* fill */
            />  
    )}
      </div>
      <div className={styles.box4Bildrechts} onClick={() => {clickHandlerNext(image3.full)}}
        >
          
          
       {image3 && (
          <Image className={styles.image}
            src= {image3.small}
            alt={image3.alt}
            quality = {75}
            width = {940}
            height ={705} 
            /*fill */
          />  
                  )}
        </div>

        <div className={styles.box1ArrowRight} onClick={() => {clickHandlerNext(image2.full)}}>
        <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="m3.454.57 10.848 10.424.09.08c.363.35.576.813.608 1.364l-.002.185c-.03.49-.243.954-.664 1.354l.005-.008L3.454 24.431a2.061 2.061 0 0 1-2.845 0 1.964 1.964 0 0 1 0-2.844l9.403-9.03L.609 3.413a1.964 1.964 0 0 1 0-2.844 2.061 2.061 0 0 1 2.845 0Z" 
                fill="#1C1C1F"/>
           </svg>
        </div>
        
     
        <div className={styles.boxModalArrowLeft} onClick={() => {clickHandlerPrev(image2.full)}}>
         <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M11.546.57.698 10.994l-.09.08c-.363.35-.576.813-.608 1.364l.002.185c.03.49.243.954.664 1.354l-.005-.008 10.885 10.462a2.061 2.061 0 0 0 2.845 0 1.964 1.964 0 0 0 0-2.844l-9.403-9.03 9.403-9.144a1.964 1.964 0 0 0 0-2.844 2.061 2.061 0 0 0-2.845 0Z" 
            fill="#1C1C1F"/>
          </svg>
        </div>
        
        
 {/*}
        <div className={styles.boxModal}>
         
        {clickedImage && (
        <Modal 
            clickedImage={clickedImage} 
            handleClickNext={clickHandlerNext}
            handleClickPrev={clickHandlerPrev}
            setClickedImage={setClickedImage}
            imageList={gridImages}
            />)
        }
         
        </div>  
   */}
        <div className={styles.boxModalCloseButton} onClick={() => { clickHandler(image2.full) }}>
        <span>X</span>
        </div>
        <div className={styles.boxModalArrowRight} onClick={() => {clickHandlerNext(image2.full)}}>
        <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="m3.454.57 10.848 10.424.09.08c.363.35.576.813.608 1.364l-.002.185c-.03.49-.243.954-.664 1.354l.005-.008L3.454 24.431a2.061 2.061 0 0 1-2.845 0 1.964 1.964 0 0 1 0-2.844l9.403-9.03L.609 3.413a1.964 1.964 0 0 1 0-2.844 2.061 2.061 0 0 1 2.845 0Z" 
                fill="#1C1C1F"/>
           </svg>
      </div>
  </div>
</div> 
    

   
</>
)

}

export default Gallery;


