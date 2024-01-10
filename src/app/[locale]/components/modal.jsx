
import Image from "next/image"
import getImageToEnlarge from "../../../functions/getImageToEnlarge"
import styles from "./gallery.module.css"
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
            
            let data = await getImageToEnlarge(clickedImage,imageList)
            .then((response) => mydata={...response})
            .then(mydata => {
                      
                copyData(mydata);
                
                })

        }
          
        getData()
       /* console.log('%c imageData useEffect', 'background: #0000ff; color: white')*/

    })

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

    
    if (mydata) {

    return (<>  
    
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
        </>
        )

   }

   else
   return (<></>)

}





export default Modal