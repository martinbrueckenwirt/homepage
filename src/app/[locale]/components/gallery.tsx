"use client"
/*https://www.youtube.com/watch?v=KNEbqO-q1r8*/
/*muster: zb key-down-Event (Barriere Armut) https://github.com/igordanchenko/react-photo-album/tree/main/examples/lightbox */
/* https://github.com/igordanchenko/yet-another-react-lightbox */

/*funktioniert grundsätzlich,nur die Navigation hat Fehler, dh bei bestimmten currentIndex, oldIndexwerten werden die Bilder in falscher Reihenfolge geladen, bzw es wird ein Bild übersprungen.*/

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
import { AppartmentModuleProps } from "../components/types"
import  Logo  from '../../../../public/Logo2023_148x22.webp'



const Gallery = ({appType}:AppartmentModuleProps)  => {

  const[clickedImage,setClickedImage] = useState(null);
  const[clickedNav,setClickedNav] = useState(0);
  const[currentIndex, setCurrentIndex] =useState(1); /*auf das 2. Element setzen, damit das 2. Bild in der Mitte ist */
  const [oldIndex, setOldIndex] = useState(1); /*analog currentindex */
  const [image1, setImage1] = useState<GalleryImage>();
  const [image2, setImage2] = useState<GalleryImage>();
  const [image3, setImage3] = useState<GalleryImage>();
  const [imageLoaded, setImageLoaded] = useState(false);


  const [imageList, setImageList] = useState<GalleryImage[]>([]);
  const [isLoaded, setisloaded] = useState<boolean>(false);
  const[lengthImageList, setLengthImageList] = useState<number>(0);
 

    
  useEffect(() =>{
    console.log('Gallery useEffect 1', appType);
    async function fetchData (appType:string) {
    const response = await getImageList(appType);
    
    if(response&&response.length>0)
        {
            let myLocalImageList = response;
            setImageList(myLocalImageList);
            
            setisloaded(true);
          

                     }
            };
            fetchData(appType)
  },[]);

   useEffect(() => {
    console.log('Gallery useEffect 2', isLoaded);
    if (isLoaded === true) {
        setImage1(imageList[0]);
        setImage2(imageList[1]);
        setImage3(imageList[2]);
        setImageLoaded(true);
        setLengthImageList(imageList.length);
      
   }
  },[isLoaded]);

  



      /*Bilder scrollen*/
      useEffect
          (() => {
            console.log('Gallery useEffect 3', clickedNav);        
      if (clickedNav) {

      if (currentIndex === -1) {
          setCurrentIndex(lengthImageList-1);
      }

      if (currentIndex === 0){
        setImage1(imageList[lengthImageList-1]);
        setImage2(imageList[currentIndex]);
        setImage3(imageList[currentIndex+1]);
        }
 
              
      if ((currentIndex >= 1 ) && (currentIndex <= lengthImageList-2)){
        setImage1(imageList[currentIndex-1])
        setImage2(imageList[currentIndex]);
        setImage3(imageList[currentIndex+1]);
      }
       if (currentIndex === (lengthImageList-1)){
        setImage1(imageList[(lengthImageList-2)])
        setImage2(imageList[(lengthImageList-1)]);
        setImage3(imageList[0]);
      }
      
       if (currentIndex === (lengthImageList)){
        setImage1(imageList[(lengthImageList-1)])
        setImage2(imageList[(0)]);
        setImage3(imageList[1]);
        setOldIndex(0)       
      } else
      {
        setOldIndex(currentIndex);
      }
      return;      
    }
      },[currentIndex, clickedNav]);
     

  const clickHandler = (image: any) => {
           /*Click auf ein Bild in der 3er Liste*/   
          /* kein Scrollen*/         
          
          console.log('clickHandler', image);
          setClickedImage(image);
          setCurrentIndex(oldIndex);
                                                  
          setImage1(imageList[currentIndex-1])
          setImage2(imageList[currentIndex]);
          setImage3(imageList[currentIndex+1]);
          
      }
 
      const clickHandlerPrev = () => {
        /*Click auf den Pfeil nach links*/   
            
         /* setClickedImage(image1.full); /*nur zur Unterstützung von UseEffect*/
          setClickedNav(clickedNav+1);
          setCurrentIndex(oldIndex-1);
          /* Logik ist im UseEffect */
          return;
        }

        
      const clickHandlerNext = () => {
        /*Click auf den Pfeil nach rechts*/   
        /*  setClickedImage(image3.full);nur zur Unterstützung von UseEffect*/
          setClickedNav(clickedNav+1);
          setCurrentIndex(oldIndex+1);
         /* Logik ist im UseEffect */
          return; 
        }
        

        function loadImage(number:number) {
          console.log('Gallery loadImage', number, imageLoaded);        
            let myImageSmall:string = '';
            let myImageAlt:string = '';
            let myImagePriority:boolean= false;
           
            if (imageLoaded === true) {
                if (number === 1) {
                    myImageSmall = image1?.small ?? '';
                    myImageAlt = image1?.alt ?? '';
                }
                if (number === 2) {
                    myImageSmall = image2?.small ?? '';
                    myImageAlt = image2?.alt ?? '';
                    myImagePriority = true;
                }
                if (number === 3) {
                    myImageSmall = image3?.small ?? '';
                    myImageAlt = image3?.alt ?? '';
                }

                return( <>
                <Image  className={styles.image}
                    src={myImageSmall}
                    alt={myImageAlt}
                    quality={60}
                    width={440}
                    height={346} 
                    priority={myImagePriority}
                    sizes="(max-width: 399px) 300px,(max-with:799px) 300px, (max-width:1079px) 440px,(max-width:1399px) 440px,(max-width:1999px) 440px, 500px"
                />  
                </>
                )
        }

            return(
               <>
               <Image  className={styles.image}
                    src={Logo}
                    alt={"Logo"}
                    quality={60}
                    width={440}
                    height={346} 
                    priority={false}
                    sizes="(max-width: 399px) 300px,(max-with:799px) 300px, (max-width:1079px) 440px,(max-width:1399px) 440px,(max-width:1999px) 440px, 500px"
                />  
               </> 
            )

        }


/*Hauptgallery*/


if (imageLoaded === false) {
  return (<></>)
}

return(

  <>

<div  className={styles.gallerygridContainer}>


<div className={styles.wrapper}>


    <div className={styles.box1ArrowLeft} onClick={() => {clickHandlerPrev()}}>
        <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M11.546.57.698 10.994l-.09.08c-.363.35-.576.813-.608 1.364l.002.185c.03.49.243.954.664 1.354l-.005-.008 10.885 10.462a2.061 2.061 0 0 0 2.845 0 1.964 1.964 0 0 0 0-2.844l-9.403-9.03 9.403-9.144a1.964 1.964 0 0 0 0-2.844 2.061 2.061 0 0 0-2.845 0Z" 
          fill="#1C1C1F"/>
        </svg>
    </div>
 
    <div  className={styles.box2BildLinks} onClick={() => {clickHandler(image1?.full)} }>
        {loadImage(1)}
    
    </div>

    <div className={styles.box3BildMitte} onClick={() => {clickHandler(image2?.full)}}
    >
    {loadImage(2)}
    </div>
    <div className={styles.box4Bildrechts} onClick={() => {clickHandler(image3?.full)}}
      >
    {loadImage(3)}
      </div>

      <div id="arrowRight" className={styles.box1ArrowRight} onClick={() => {clickHandlerNext()}}>
      <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <path d="m3.454.57 10.848 10.424.09.08c.363.35.576.813.608 1.364l-.002.185c-.03.49-.243.954-.664 1.354l.005-.008L3.454 24.431a2.061 2.061 0 0 1-2.845 0 1.964 1.964 0 0 1 0-2.844l9.403-9.03L.609 3.413a1.964 1.964 0 0 1 0-2.844 2.061 2.061 0 0 1 2.845 0Z" 
              fill="#1C1C1F"/>
         </svg>
      </div>
      
   
      
    </div>
    <Modal 
        clickedImage={clickedImage} 
        handleClickNext={clickHandlerNext}
        handleClickPrev={clickHandlerPrev}
        setClickedImage={setClickedImage}
        imageList={imageList}
        />

</div> 
  

 
</>
)

}

export default Gallery;


