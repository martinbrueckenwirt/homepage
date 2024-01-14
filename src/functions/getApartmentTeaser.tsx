import imageList from "../../data/image";
import {AppartmentModuleProps, IAppartementTeaserImage, ImageType} from '../app/[locale]/components/types';



export default function getApartmentTeaser(props:AppartmentModuleProps): unknown  
{

    let filteredList:any = [];
    let teaserImage: ImageType[]; /* array, aber es kommt nur 1 Element zurück */

    /*1 Bilderliste auf die Bilder des Appartments reduzieren */
    filteredList = imageList.filter(function (el) {
        return el.id === props.appType 
        });

    if (filteredList.length === 0) {
    console.log('getApartmentTeaser FEHLER - falscher Typ :', props.appType);
    return filteredList;
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
        imageName: teaserImage[0].full,
        description: teaserImage[0].description,
        alt: teaserImage[0].alt,
        copyright: teaserImage[0].copyright,
        height: 630,
        width: 800,
        priority: true
        } 
    return obj;
}