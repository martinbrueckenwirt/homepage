
import styles  from './apartmentOverview.module.css';
import {AppartmentModuleProps, AppartementTeaserImage} from './types';
import getApartmentTeaser from '../functions/getApartmentTeaser';


export default function ApartmentModule(props:AppartmentModuleProps) {

let myImage: AppartementTeaserImage;

myImage = getApartmentTeaser(props.type);

return (

<div>hier ist das Apartment {props.type}</div>


)

}