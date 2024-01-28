import styles  from './heroModule.module.css';
import Image from 'next/image'
import Link from 'next/link';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';
import { HeroProps } from './types';
import {useTranslations} from 'next-intl';
import logo from '../../../../public/Logo2023_250x37.webp';
import logosmall from '../../../../public/Logo2023_148x22.webp';

export default function Hero(props:HeroProps) {

    let myImage:string =  props.imageUrl;
    
    const t = useTranslations('hero');
    const bookingButton = t('bookingButton');

    return(

        <div className = {styles.heroSection}>
           
            <div className = {styles.buttonContainer}>
                <Link href ="/" className = {styles.logo}>
                    <Image 
                    src = {logo}
                    alt = "logo"
                    width ={250}
                    height ={37}
                    priority={true}
                    />
                </Link>
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