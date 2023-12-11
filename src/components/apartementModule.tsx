
import styles  from './apartmentModule.module.css';
import {AppartmentModuleProps, IAppartementTeaserImage} from './types';
import getApartmentTeaser from '../functions/getApartmentTeaser';
import Image from 'next/image'
import getMinPriceApartment from '../functions/getMinPriceApartment';
import { MinPrice } from './types';



export default function ApartmentModule(props:AppartmentModuleProps) {

let myImage: IAppartementTeaserImage;

    myImage = getApartmentTeaser(props);
    console.log(myImage);
    

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

<div className={styles.apartmentCard}>
            
   

    <div className ={styles.image}> 
                <Image
                    src={myImage.imageName}
                    /* width = {myImage.width}
                     height ={myImage.height}*/
                    width={500}
                    height={500}
            
           /* layout="fill"
            objectFit = "contain"*/
            alt ={myImage.alt}
        />
            </div>

    <div className ={styles.overlay}>
        <div className={styles.title}>Apartment {props.appType}</div>
        <p className={styles.description}>4-6 Personen </p>
        
             
        <div className={styles.prices}>
                {getMinprices(props)}   
        </div>
                
        
                        
        <div className={styles.buttonContainer}>
            <div >
                <button className={styles.buttonLeft}> Buchen</button>        
                    </div>
                    <div className={styles.button}>
                <button className={styles.buttonRight}> Details</button>        
            </div>
        </div>
    </div>      
</div>
</>


)

}