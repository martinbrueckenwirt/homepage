
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
    /*arrow: https://www.svgviewer.dev/s/442312/right optimized*/
    /*close*/
    /*<svg width="800" height="800" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="#444" d="M15.1 3.1 12.9.9 8 5.9 3.1.9.9 3.1l5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"/></svg> */
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
         <div  className="overlay-arrows-right"  onClick={handleClickNext} >
            <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="m3.454.57 10.848 10.424.09.08c.363.35.576.813.608 1.364l-.002.185c-.03.49-.243.954-.664 1.354l.005-.008L3.454 24.431a2.061 2.061 0 0 1-2.845 0 1.964 1.964 0 0 1 0-2.844l9.403-9.03L.609 3.413a1.964 1.964 0 0 1 0-2.844 2.061 2.061 0 0 1 2.845 0Z" 
                fill="#1C1C1F"/>
           </svg> */
          
         
         </div>   
        <div> *a* Pfeile rechts und links 19:00 inkl css</div>
        <div  className="overlay-arrows-right"  onClick={handleClickPrev} >
            <svg width="50" height="100" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M11.546.57.698 10.994l-.09.08c-.363.35-.576.813-.608 1.364l.002.185c.03.49.243.954.664 1.354l-.005-.008 10.885 10.462a2.061 2.061 0 0 0 2.845 0 1.964 1.964 0 0 0 0-2.844l-9.403-9.03 9.403-9.144a1.964 1.964 0 0 0 0-2.844 2.061 2.061 0 0 0-2.845 0Z" 
            fill="#1C1C1F"/>
            </svg>*/
        </div>   
        
        </>
        )

   }

   else
   return (<></>)

}





export default Modal