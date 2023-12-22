
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
    console.log(myImage);
    

    function getMinprices(type: AppartmentModuleProps): any {
        let prices: MinPrice; 
        let myType = type.appType;
        prices = getMinPriceApartment(myType);

        return (
        <>
                <p>{t('pricesummer')} {prices.minPriceSummer} </p>
                <p>{t('pricewinter')} {prices.minPriceWinter} </p>
        </>
        )
    }

    function getPersons(type: AppartmentModuleProps): any {
        let persons: string;
        let myType = type.appType;
        persons = getPersonsForType(myType);

        return (
            <>
                <p>{persons} {t('persons')} </p>
                
            </>
        )
    }

return (
<>

<div className={styles.apartmentCard}>
            
   

    <div className ={styles.image}> 
                <Image
                    fill
                    /*objectFit='contain' */
                    priority={false}
                    src={myImage.imageName}
                    /* width = {myImage.width}
                     height ={myImage.height}*/
                    /*width={800}*/
                    /*height={50vw}*/
                    sizes="calc(50vw - 8px)"
           /* layout="fill"
            objectFit = "contain"*/
            alt ={myImage.alt}
        />
            </div>

    <div className={styles.overlay}>
        <div className={styles.backdrop}>
            
            <div className={styles.title}> {t('appartment')} {props.appType}</div>
                    <div className={styles.description}> {getPersons(props)} </div>
            
                
            <div className={styles.prices}>
                    {getMinprices(props)}   
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