"use client"
/*https://www.youtube.com/watch?v=KNEbqO-q1r8*/
/*muster: zb key-down-Event (Barriere Armut) https://github.com/igordanchenko/react-photo-album/tree/main/examples/lightbox */
/* https://github.com/igordanchenko/yet-another-react-lightbox */

/*funktioniert nicht, weil das Umkopieren der rotierten Liste auf die imageList nicht funktioniert */
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






const Gallery = ({appartmentTyp})  => {

  const[clickedImage,setClickedImage] = useState(null);
 
  const[nextImage,setNextImage] = useState(0);
  const[prevImage,setPrevImage] = useState(0);
  const[prevImageFirstPass,setPrevImageFirstPass] = useState(true);


  const [image1, setImage1] = useState<StaticImageData>();
  const [image2, setImage2] = useState<GalleryImage | null>();
  const [image3, setImage3] = useState();
  const [imageName, setImageName] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);


  const [imageList, setImageList] = useState<GalleryImage[]>([]);
  const [imageListIndex, setImageListIndex] = useState<number[]>([]);
  const [isLoaded, setisloaded] = useState<boolean>(false);
  const [isImageListIndex, setIsImageListIndex] = useState<boolean>(false);
  const[lengthImageList, setLengthImageList] = useState<number>(0);//Liste soll einen Index auf die orginale imageList halten; das rotate der imageList hat nicht funktioniert, weil die ImageList Objekte enthält.
 
 
      
  
    
  useEffect(() =>{
    async function fetchData (appartementTyp) {
    const response = await getImageList(appartementTyp);
    
    if(response&&response.length>0)
        {
            let myLocalImageList = response;
            setImageList(myLocalImageList);
            
            setisloaded(true);
            
                     }
            };
            fetchData(appartmentTyp)
            
  },[]);

  function copyArray(myArray) {
    console.log('copyArray eingang', myArray);
    setImageListIndex(...myArray); 
   
    console.log('copyArray eingang', imageListIndex);
    return imageListIndex
  }

   useEffect(() => {
    
    function init() {
    
        if (isLoaded === true) {
            let localArray:number[]=[];
            setImage1(imageList[0]);
            setImage2(imageList[1]);
            setImage3(imageList[2]);
            setImageLoaded(true);
            setLengthImageList(imageList.length);
            for ( let i=0; i<= imageList.length-1; i++ ) {
            localArray.push(i);
            }
            console.log('imagelistIndex nach der schleife localArray FUNKTIONIERT ', localArray);
            
            const myArr = copyArray(localArray);
            
            console.log('imagelistIndex nach der schleife', myArr );

        }
    }
        init();

  },[isLoaded]);

  



      /*Bilder prev scrollen*/
      useEffect
      (() => { if((clickedImage) && (!prevImageFirstPass)) {
        
       console.log('gallery2024 useEffect prevImage ', imageList, imageListIndex);

    
       

/* if (reverse) arr.unshift(arr.pop());*/
       /* setImageList(imageList.unshift(imageList.pop()));*/
        setImage1(imageList[0])
        setImage2(imageList[1]);
        setImage3(imageList[2]);

           }
       setPrevImageFirstPass(false); 
       console.log('gallery2024 useEffect prevImage Ausgang', imageList);
       
      },[prevImage, clickedImage]);

      /*Bilder next scrollen*/
      useEffect
      (() => { if(clickedImage){
        
       console.log('gallery2024 useEffect nextImage'  );
      
    }
      },[nextImage, clickedImage]);
     

      const clickHandler = (image:any) => {
          /*Click auf das mittlere der Bilder in der 3er Liste*/   
          /* kein Scrollen*/         
          setClickedImage(image);
                                                      
          setImage1(imageList[0])
          setImage2(imageList[1]);
          setImage3(imageList[2]);
          
      }
 
      const clickHandlerPrev = (image:any) => {
        /*Click auf das linke der Bilder in der 3er Liste oder auf den Pfeil nach links*/   
        /* kein Scrollen*/         
          setClickedImage(image);
          
          console.log('gallery2024 clickHandlerPrev eingang', prevImage);

          setPrevImage(prevImage+1);
          /* Logik ist im UseEffect */

          console.log('clickHandlerPrev ausgang ', prevImage );
          return;
        }

        
      const clickHandlerNext = (image:any) => {
        /*Click auf das linke der Bilder in der 3er Liste oder auf den Pfeil nach links*/   
        /* kein Scrollen*/         
          setClickedImage(image);
          
          console.log('gallery2024 clickHandlerNext eingang');

        
          /* Logik ist im UseEffect */

          console.log('clickHandlerNext ausgang');
          return; 
        }
          
      
          
       

                                                  
         


const checkIsClicked = (index:any) => {
    return index === 1;
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
        

      
        {(imageLoaded === true) && (
          <Image className={styles.image}
            src={image1.small}
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
      {(imageLoaded === true) && (
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
        
        
     {(imageLoaded === true) && (
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
      
   
      
</div>

{/*}
<div className={styles.wrapperModal}>      
    <div className={styles.boxModalArrowLeft} onClick={() => {clickHandlerNext(image2.full)}}>
      <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M11.546.57.698 10.994l-.09.08c-.363.35-.576.813-.608 1.364l.002.185c.03.49.243.954.664 1.354l-.005-.008 10.885 10.462a2.061 2.061 0 0 0 2.845 0 1.964 1.964 0 0 0 0-2.844l-9.403-9.03 9.403-9.144a1.964 1.964 0 0 0 0-2.844 2.061 2.061 0 0 0-2.845 0Z" 
          fill="#1C1C1F"/>
        </svg>
    </div>

      <div className={styles.boxModal}>
       
      {(clickedImage && isLoaded) &&(
      <Modal 
          clickedImage={clickedImage} 
          handleClickNext={clickHandlerNext}
          handleClickPrev={clickHandlerPrev}
          setClickedImage={setClickedImage}
          imageList={imageList}
          />)
      }
       <div className={styles.boxModalCloseButton} onClick={() => { clickHandler(image2.full) }}>
      <span>X</span>
      </div>
      </div>  
 
      

      
      <div className={styles.boxModalArrowRight} onClick={() => {clickHandlerNext(image2.full)}}>
      <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg">
              <path d="m3.454.57 10.848 10.424.09.08c.363.35.576.813.608 1.364l-.002.185c-.03.49-.243.954-.664 1.354l.005-.008L3.454 24.431a2.061 2.061 0 0 1-2.845 0 1.964 1.964 0 0 1 0-2.844l9.403-9.03L.609 3.413a1.964 1.964 0 0 1 0-2.844 2.061 2.061 0 0 1 2.845 0Z" 
              fill="#1C1C1F"/>
         </svg>
    </div>
</div>

    */}
</div> 
  

 
</>
)

}

export default Gallery;


