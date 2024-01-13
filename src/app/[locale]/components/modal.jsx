
import Image from "next/image"
import getImageToEnlarge from "../../../functions/getImageToEnlarge"
import styles from "./modal.module.css"
import {useEffect, useState} from "react" 



const Modal = ({clickedImage, handleClickNext, handleClickPrev, setClickedImage, imageList}) =>{

   
    const [dataReceived, setDataReceived] = useState(null);
    const [altAttribut, setAltAttribut] = useState(null);
    const [desc,setDesc] =useState(null);
    const [imgSrc, setImgSrc] = useState(null);
 
    
    function copyData(param){
        setAltAttribut(param.alt);
        setDesc(param.description);
        setImgSrc(param.enlargeImage);
        
       /* console.log('%c copyData', 'background: #0000ff; color: white', imgSrc)*/
    }
 
    let mydata =[]
    useEffect( () =>{
        let response =[]
        
        async function getData() {
            if (clickedImage === null) {
                return
            }
            else {
            
            let data = await getImageToEnlarge(clickedImage,imageList)
            .then((response) => mydata={...response})
            .then(mydata => {
                      
                copyData(mydata);
                
                })

             }
        }          
        getData()
       /* console.log('%c imageData useEffect', 'background: #0000ff; color: white')*/

    },[clickedImage])

    useEffect( () =>{   
        setDataReceived(1);
        /*console.log('%c imageData useEffect', 'background: #0000ff; color: white');
        console.log('%c imgSrc', 'background: #0000ff; color: white', imgSrc);*/
    },[imgSrc])
    
  
    const handleCloseClick = (e) => {
      /*  if (e.target.className === "close") {
            console.log('Modal im CloseClick');
            	setClickedImage(null);
        }*/
       /* console.log('Modal im CloseClick');*/
            	setClickedImage(null);
    };

  

/*blendet das modale Fenster ein*/
 
    if ((!mydata) || (clickedImage === null)) {
      return <></>;
    }
   
       
  
    if ((mydata) && (clickedImage != null)) {
       
    
    return (
  
     <>
    <div className={styles.modalOverlay} >
          
        <div className={styles.wrapperModal}>      
            <div className={styles.boxModalArrowLeft} onClick={() => {clickHandlerPrev(image1.full)}}>
                <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M11.546.57.698 10.994l-.09.08c-.363.35-.576.813-.608 1.364l.002.185c.03.49.243.954.664 1.354l-.005-.008 10.885 10.462a2.061 2.061 0 0 0 2.845 0 1.964 1.964 0 0 0 0-2.844l-9.403-9.03 9.403-9.144a1.964 1.964 0 0 0 0-2.844 2.061 2.061 0 0 0-2.845 0Z" 
                    fill="#1C1C1F"/>
                </svg>
            </div>
        
                
                <div className={styles.boxModal}>
            
            
                    <div  onClick={handleCloseClick} >
                                
                        {imgSrc && (
                                <Image className={styles.imageModal}
                                        src= {imgSrc}
                                        alt={altAttribut}
                                        quality = {75}
                                        width = {940}
                                        height ={705}
                                        
                                    />
                                    )
                        }
                        <span className={styles.boxModalCloseButton} onClick={handleCloseClick} >X</span>
                    </div>
                </div>  
        
            <div  className={styles.boxModalArrowRight} onClick={() => {clickHandlerNext(image3.full)}}>
                <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path d="m3.454.57 10.848 10.424.09.08c.363.35.576.813.608 1.364l-.002.185c-.03.49-.243.954-.664 1.354l.005-.008L3.454 24.431a2.061 2.061 0 0 1-2.845 0 1.964 1.964 0 0 1 0-2.844l9.403-9.03L.609 3.413a1.964 1.964 0 0 1 0-2.844 2.061 2.061 0 0 1 2.845 0Z" 
                        fill="#1C1C1F"/>
                </svg>
            </div>
        </div>
    </div>
    </>
  )}
  
}

export default Modal