
import Image from "next/image"
import getImageToEnlarge from "../functions/getImageToEnlarge"
import {useEffect, useState} from "react" 


const Modal = ({clickedImage, handleClickNext, handleClickPrev, setClickedImage, type}) =>{
    const [dataReceived, setDataReceived] = useState(null);
    const [altAttribut, setAltAttribut] = useState(null);
    const [desc,setDesc] =useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [height,setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [priority,setPriority] = useState(null);


    function copyData(param){
        setAltAttribut(param.alt);
        setDesc(param.description);
        setImgSrc(param.enlargeImage);
        setHeight(param.height);
        setWidth(param.width);
        setPriority(param.priority);
        setDataReceived(1);;
    }
 
    let mydata =[]
    useEffect( () =>{
        let response =[]
        async function getData() {
            
            let data = await getImageToEnlarge(clickedImage,type)
            .then((response) => mydata={...response})
            .then(mydata => {
       
                console.log('%c imageData useEffect', 'background: #0000ff; color: white');
                copyData(mydata);
                

                })

        }
          
        getData()

    })
    
  
    const handleCloseClick = (e) => {
       if(e.target.className ==="close"){
            	setClickedImage(null);
        }
    };

   

    console.log('%c imageData', 'background: #00ff00; color: red');


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
   if (dataReceived){

    return (<>  
    
        <div className="overlay close" onClick={handleCloseClick} ></div>
        
        <Image 
                        src= {imgSrc}
                        alt={altAttribut}
                        quality = {30}
                        width = {300}
                        height ={200}
                    />
                    <span className="close" onClick={handleCloseClick} >X</span>
         <div  className="overlay-arrows-right"  onClick={handleClickNext} >REEEECHTS</div>   
        <div> *a* Pfeile rechts und links 19:00 inkl css</div>
        <div  className="overlay-arrows-right"  onClick={handleClickPrev} >LIIIINKS</div>   
        
        </>
        )

   }

   else
   return (<></>)

}



}

export default Modal