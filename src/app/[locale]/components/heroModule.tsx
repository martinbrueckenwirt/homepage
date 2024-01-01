import styles  from './heroModule.module.css';
import Image from 'next/image'
import Link from 'next/link';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';
import { HeroProps } from './types';
import {useTranslations} from 'next-intl';

export default function Hero(props:HeroProps) {

    let myImage:string =  props.imageUrl;
    
    const t = useTranslations('home');

    return(

        <div className = {styles.heroSection}>
            
            <div className ={styles.headlineContainer}>
                <h1 className ={`${h1Font.className} ${styles.heroText}`} >{t('title')}</h1>
                 <button className ={styles.bookButton}>Buchen</button>
            </div>
            <div className={styles.imageContainer}>
                <Image className={styles.heroImage}
                src={props.imageUrl}
                /*fill={true}*/
                /*objectFit='contain' */
                width={50}
                height={50}

                priority={true}
            
                sizes ="(max-width:779px) 100vw, (max-width:1399px) 50vw, 33vw)"

                alt ={props.imageUrlAlt}
                />

            </div>

           
         
   </div>
    )
}