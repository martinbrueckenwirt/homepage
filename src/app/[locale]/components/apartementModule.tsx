
import styles  from './apartmentModule.module.css';
import {AppartmentModuleProps, IAppartementTeaserImage} from './types';
import getApartmentTeaser from '../../../functions/getApartmentTeaser';
import Image from 'next/image'
import getMinPriceApartment from '../../../functions/getMinPriceApartment';
import { MinPrice } from './types';
import getPersonsForType from '../../../functions/getPersonsForType';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import imageAppA from '../../../../public/P1190113-800x630-180-60.webp';
import imageAppB from '../../../../public/P1210796-1-800x630-180-60.webp';
import imageAppC from '../../../../public/P1210796-1-800x630-180-60.webp';
import imageAppD from '../../../../public/P1430857-800x630-180-60.webp';
import imageAppE from '../../../../public/P1360618-800x630-180-60.webp';








export default function ApartmentModule(props:AppartmentModuleProps) {

/*let myImage: IAppartementTeaserImage;*/
let myImage: string;
    const t = useTranslations('home');
    /*myImage = getApartmentTeaser(props);  */
   

    let persons: string;
    let prices: MinPrice; 
    let localImage: any;
    let localAlt:string ="Bild der Ferienwohnung";
    /*Achtung! das OBERSTE Bild braucht Priority=true*/
    let priority: boolean = false;
    

    if (props.appType === "A") {
        localImage = imageAppA
        priority=true;
    }

    if (props.appType === "B") {
        localImage = imageAppB
        priority=false;
    }
    if (props.appType === "C") {
         localImage = imageAppC
         priority=false;
    }
    if (props.appType === "D") {
        localImage = imageAppD
        priority=false;
   }    
   if (props.appType === "E") {
    localImage = imageAppE
    priority=false;
}


   
    prices= getMinPriceApartment(props.appType);
    persons = getPersonsForType(props.appType);
    
    /*localImage = myImage.imageName;
    localAlt = myImage.alt;*/



   



return (
<>

    <div className={styles.apartmentCard}>

        <div className ={styles.image}> 
            
        <Image
                        fill={true}
                        /*src="/../../../../public/P2535150-HDR-1.jpg"*/
                       src={localImage}
                        /*width={800}
                        height={630}*/
                        /*objectFit='contain' */
                        priority={priority}
                      
                        sizes ="(max-width:779x) 100vw, (max-width:1399) 50vw, 33vw)"
                        alt ={localAlt} 
                
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