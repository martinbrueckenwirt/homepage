
import styles  from './apartmentModule.module.css';
import {AppartmentModuleProps, IAppartementTeaserImage} from './types';
import getApartmentTeaser from '../../../functions/getApartmentTeaser';
import Image from 'next/image'
import getMinPriceApartment from '../../../functions/getMinPriceApartment';
import { MinPrice } from './types';
import getPersonsForType from '../../../functions/getPersonsForType';
import Link from 'next/link';
import {useTranslations} from 'next-intl';








export default function ApartmentModule(props:AppartmentModuleProps) {

let myImage: IAppartementTeaserImage;
    const t = useTranslations('home');
    myImage = getApartmentTeaser(props);
    let persons: string;
    let prices: MinPrice; 
    
    prices= getMinPriceApartment(props.appType);
    persons = getPersonsForType(props.appType);

return (
<>

<div className={styles.apartmentCard}>

    <div className ={styles.image}> 
           
    <Image
                    /*fill*/
                    /*objectFit='contain' */
                    priority={false}
                    src={myImage.imageName}
                   /* src= '/P2535150-HDR-1.jpg' */
                    /* width = {myImage.width}
                     height ={myImage.height}*/
                    width={800}
                    height={400}
                    /*sizes="calc(50vw - 8px)"*/
           /* layout="fill"
            objectFit = "contain"*/
            alt ={myImage.alt} 
            alt = "test"
        />
		
            </div>

    <div className={styles.overlay}>
        <div className={styles.backdrop}>
            
            <div className={styles.title}> {t('appartment')} {props.appType}</div>
                    <div className={styles.description}>  {persons} {t('persons')}</div>
            
                
            <div className={styles.prices}>
                <p>{t('pricesummer')} {prices.minPriceSummer} </p>
                <p>{t('pricewinter')} {prices.minPriceWinter} </p>
            </div>
        </div>        
        
       
                        
        <div className={styles.buttonContainer}>
            <div >
                <button className={styles.buttonLeft}> {t('booknow')}</button>        
            </div>

            <Link href="#">
                <div className={styles.button}>
                    <button className={styles.buttonRight}> {t('details')}</button>        
                </div>
            </Link>


        </div>
    </div>      
</div>
</>


)

}