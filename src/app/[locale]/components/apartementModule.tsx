
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
    let localImage: string;
    let localAlt:string;

    if (props.appType === "Z") {
        console.log('Brückenwirt');
        localImage
    }
    
    else{
    prices= getMinPriceApartment(props.appType);
    persons = getPersonsForType(props.appType);
    
    localImage = myImage.imageName;
    localAlt = myImage.alt;
    console.log('appartementModule ', localImage);
    }



return (
<>

    <div className={styles.apartmentCard}>

        <div className ={styles.image}> 
            
        <Image
                        fill={true}
                        /*width={300}
                        height={300}*/
                        /*objectFit='contain' */
                        priority={false}
                        src={localImage}
                        sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
            
                alt ={myImage.alt} 
                
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