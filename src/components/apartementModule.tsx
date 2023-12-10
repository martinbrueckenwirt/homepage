
import styles  from './apartmentModule.module.css';
import {AppartmentModuleProps, IAppartementTeaserImage} from './types';
import getApartmentTeaser from '../functions/getApartmentTeaser';
import Image from 'next/image'
import getMinPriceApartment from '../functions/getMinPriceApartment';
import { MinPrice } from './types';



export default function ApartmentModule(props:AppartmentModuleProps) {

let myImage: IAppartementTeaserImage;

    myImage = getApartmentTeaser(props);
    

    function getMinprices(type: AppartmentModuleProps): any {
        let prices: MinPrice; 
        let myType = type.appType;
        prices = getMinPriceApartment(myType);

        return (
        <>
                <p>Preis Sommer ab: {prices.minPriceSummer} </p>
                <p>Preis Winter ab: {prices.minPriceWinter} </p>
        </>
        )
    }

return (
<>

<div className={styles.apartmentCard}> hier startet die Card
            
            <div>
             {getMinprices(props)}   
</div>

    <div className ={styles.image}> 
        <Image 
            src = {myImage.imageName}
            width = {myImage.width}
            height ={myImage.height}
            alt ={myImage.alt}
        />
    </div>
    <div className={styles.text}>hier ist der Text für das Apartment {props.appType}
            <p className={styles.paragraph}>Für </p>
            <p className={styles.paragraph}>6 </p>
            <p className={styles.paragraph}>Personen</p>    
            <p className={styles.paragraph}>m²</p>            
                    
    </div>
       
    <div className={styles.linkButton}>
         <button> das ist der Button</button>        

    </div>

            
</div>
</>


)

}