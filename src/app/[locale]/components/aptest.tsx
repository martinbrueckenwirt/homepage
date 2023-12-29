import styles  from './apartmentModule.module.css';
import Image from 'next/image'
import {AppartmentModuleProps, IAppartementTeaserImage} from './types';

import imageAppA from '../../../../public/P2535150-HDR-1.jpg';
import imageAppB from '../../../../public/P1560082-small2.webp';
import imageAppC from '../../../../public/P1560072.jpg';

export default function Aptest(props:AppartmentModuleProps) {

    let localImage: ImageData;
    let localAlt:string ="Alt";
    console.log('aptest' ,props);
  /*  console.log('aptest' ,imageAppB);*/

    if (props.appType === "A") {
        localImage = imageAppA
        console.log('aptest-  im A' ,localImage);
        }

        if (props.appType === "B") {
            localImage = imageAppB
            
            }
            if (props.appType === "C") {
                localImage = {imageAppC}
                
                }

/*localImage = {imageAppA};*/
console.log('aptest' ,localImage);

return (
<>

<Image
                        /*fill={true}*/
                       src={localImage}
                       /*src={localImage}*/
                        width={300}
                        height={300}
                        /*objectFit='contain' */
                        priority={true}
                      
                        /*sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"*/
            
                alt ={localAlt} 
                
            />
<Image
                        /*fill={true}*/
                       src={imageAppB}
                       /*src={localImage}*/
                        width={300}
                        height={300}
                        /*objectFit='contain' */
                        priority={true}
                      
                        /*sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"*/
            
                alt ={localAlt} 
                
            />

<Image
                        /*fill={true}*/
                       src="/P2535150-HDR-1.jpg"
                       /*src={localImage}*/
                        width={300}
                        height={300}
                        /*objectFit='contain' */
                        priority={true}
                      
                        /*sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"*/
            
                alt ={localAlt} 
                
            />

</>
)
}