
import Image from "next/image"
import getImageToEnlarge from "../functions/getImageToEnlarge"
import {useEffect, useState} from "react" 


const Modal = ({clickedImage, handleClickNext, setClickedImage, type}) =>{
    const [dataReceived, setDataReceived] = useState(null);
    const [altAttribut, setAltAttribut] = useState(null);
    const [desc,setDesc] =useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const imageData ={
        image:String, 
        index: Number,
        description : String,
        alt: String,
        copyright: "Brückenwirt Appartements",
        height: Number,
        width: Number,
        priority: Boolean
    }

        let altAttr ='hugo';

    function copyData(param){
        console.log('copydata ',param);
        setAltAttribut(param.alt);
        setDesc(param.description);
        setImgSrc(param.enlargeImage);
        setDataReceived(1);;
        
    }
    let mydata =[]
    useEffect( () =>{
        let response =[]
        async function getData() {
            
            let data = await getImageToEnlarge(clickedImage,type)
            .then((response) => mydata={...response})
            .then(mydata => {
                imageData.image = mydata.enlargeImage;
                imageData.alt = mydata.alt;
                imageData.description = mydata.description;
                console.log('%c imageData useEffect', 'background: #0000ff; color: white');
                console.log(imageData, 'background: #0000ff; color: white');
                console.log('######modal useeffect data description', imageData.description);
                copyData(mydata);
                 return imageData;

                })

        }
          
        getData()

    })
    
      
    /*imageData = getImageToEnlarge(clickedImage.full,type) */

    /*let alt = imageData.alt;
    src= {clickedImage.full}*/

    console.log('%c imageData', 'background: #00ff00; color: red');
    console.log ('*******modal image ', imgSrc)
    console.log ('*******modal altATTR ', altAttribut)
    
    let alt = 'alt text'
    let src = '/P1470817.jpg'

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
    
    )
}
    </>
    )
    
}



}

export default Modal