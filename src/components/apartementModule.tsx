
import styles  from './apartmentOverview.module.css';
import {AppartmentModuleProps, IAppartementTeaserImage} from './types';
import getApartmentTeaser from '../functions/getApartmentTeaser';
import Image from 'next/image'



export default function ApartmentModule(props:AppartmentModuleProps) {

let myImage: IAppartementTeaserImage;

myImage = getApartmentTeaser(props);

return (
<>
<div>hier ist das Apartment {props.type}</div>
<div> das ist das Bild {myImage.imageName}

<Image 
src = {myImage.imageName}
width = {myImage.width}
height ={myImage.height}
alt ={myImage.alt}

/>

</div>

</>


)

}