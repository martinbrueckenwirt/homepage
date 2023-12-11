import imageList from "../../data/image";
import {AppartmentModuleProps, IAppartementTeaserImage, ImageType} from '../components/types';



export default function getApartmentTeaser(props:AppartmentModuleProps): IAppartementTeaserImage  
{

    let filteredList: any[];
    let teaserImage: ImageType[]; /* array, aber es kommt nur 1 Element zurück */

    /*1 Bilderliste auf die Bilder des Appartments reduzieren */
    filteredList = imageList.filter(function (el) {
        return el.id === props.appType 
        });

    if (filteredList.length === 0) {
    console.log('getApartmentTeaser FEHLER - falscher Typ :', props.appType);
    return filteredList  
    }

    
    function getTeaserImage(list:any[]){
        for(var i=0; i<filteredList[0].images.length; i++){
            if  (filteredList[0].images[i].teaser === true){
            return filteredList[0].images[i];
        }
        }
    }
        
    teaserImage = getTeaserImage(filteredList)
        
    const obj:IAppartementTeaserImage = {
        imageName: teaserImage.full,
        description: teaserImage.description,
        alt: teaserImage.alt,
        copyright: teaserImage.copyright,
        height: 400,
        width: 500,
        priority: true
        } 
    return obj;
}