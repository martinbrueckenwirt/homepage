import imageList from "../../data/image";
import {AppartmentModuleProps, AppartementTeaserImage, ImageType} from '../components/types';



export default function getApartmentTeaser(props:AppartmentModuleProps): AppartementTeaserImage  
{

    let filteredList: any = [];
    let teaserImage: ImageType []; /* array, aber es kommt nur 1 Element zurück */
    let obj: AppartementTeaserImage;

    /*1 Bilderliste auf die Bilder des Appartments reduzieren */
    filteredList = imageList.filter(function (el) {
        return el.id === props.type 
        });

    if (filteredList.length === 0) {
    console.log('getApartmentTeaser FEHLER - falscher Typ :', props.type);
    return filteredList  
    }

    /*2. aus der Bilderliste das Teaserbild suchen */
    teaserImage = filteredList.filter(function (el:any) {
        return el.id === (filteredList.teaser ===true) 
        });

        
    obj = {
        /*image= teaserImage[0].full; */
        
        description = teaserImage[0].description;
        alt = teaserImage[0].alt;
        copyright = teaserImage[0].copyright;
        height= 100;
        width= 100;
        priority: true;
    }

    return obj;
}