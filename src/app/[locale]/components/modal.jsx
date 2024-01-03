
import Image from "next/image"
import getImageToEnlarge from "../../../functions/getImageToEnlarge"
import {useEffect, useState} from "react" 
import myImage from "../../../../public/P1210796-1-800x630-180-60.webp"


const Modal = ({clickedImage, handleClickNext, handleClickPrev, setClickedImage, imageList}) =>{
    const [dataReceived, setDataReceived] = useState(null);
    const [altAttribut, setAltAttribut] = useState(null);
    const [desc,setDesc] =useState(null);
    const [imgSrc, setImgSrc] = useState(null);
 
    
    function copyData(param){
        setAltAttribut(param.alt);
        setDesc(param.description);
        setImgSrc(param.enlargeImage);
        
        console.log('%c copyData', 'background: #0000ff; color: white', imgSrc)
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
        console.log('%c imageData useEffect', 'background: #0000ff; color: white')

    })

    useEffect( () =>{   
        setDataReceived(1);
        console.log('%c imageData useEffect', 'background: #0000ff; color: white');
        console.log('%c imgSrc', 'background: #0000ff; color: white', imgSrc);
    },[imgSrc])
    
  
    const handleCloseClick = (e) => {
       if(e.target.className ==="close"){
            	setClickedImage(null);
        }
    };

     

    /*console.log('%c imageData', 'background: #00ff00; color: red'); */


/*
    return (<>  
    
    <div className="overlay close"></div>
    
    {dataReceived && (
    <Image 
                    src= {imgSrc}
                    alt={altAttribut}
                    quality = {30}
                    width = {300}
                    height ={200}
                />
                <span className="close">X</span>
    
    )
}
    </>
    )

    */
    /*arrow: https://www.svgviewer.dev/s/442312/right optimized*/
    /*close*/
    /*<svg width="800" height="800" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#444" d="M15.1 3.1 12.9.9 8 5.9 3.1.9.9 3.1l5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"/></svg> */
   if (mydata){

    return (<>  
    
        <div className="overlay close" onClick={handleCloseClick} ></div>
        <p>{imgSrc}</p>
            
        {imgSrc && (
            <Image 
                        src= {imgSrc}
                        alt={altAttribut}
                        quality = {30}
                        width = {300}
                        height ={225}
                       
                    />
                    )
                }
                    <span className="close" onClick={handleCloseClick} >X</span>
        
         
        
        </>
        )

   }

   else
   return (<></>)

}





export default Modal