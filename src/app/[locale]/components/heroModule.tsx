import styles  from './heroModule.module.css';
import Image from 'next/image'
import Link from 'next/link';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';
import { HeroProps } from './types';
import {useLocale,useTranslations} from 'next-intl';

// import logo from '../../../../public/Logo2023_250x37.webp';
import logo from '../../../../public/LogoKreis.png';
import logosmall from '../../../../public/Logo2023_148x22.webp';

export default function Hero(props:HeroProps) {

    const t = useTranslations('hero');
    const bookingButton = t('bookingButton');
    //89%
    //largest contentful paint 2,4s, Blocking 380ms funktioniert nicht bei 1900px- viel zu klein    
    // const sizes:string = "(max-width: 779px) 100vw, (max-width: 1399px) 50vw, 33vw";
    //88% largest contentful paint 2,4s, Blocking 400ms - funktioniert nicht bei 1900px- viel zu klein
    // const sizes:string = "(max-width: 779px) 100vw, (max-width: 1079px) 80vw, (max-width: 1399px) 70vw, (max-width: 1999px) 60vw, 33vw";
    //89% largest contentful paint 2,3s, Blocking 380ms
    const sizes:string = "(max-width: 399px) 100vw, (max-width: 779px) 100vw, (max-width: 1079px) 80vw, (max-width: 1399px) 75vw, (max-width: 1999px) 75vw, 70vw";
    
    return(

        <div className = {styles.heroSection}>
           
            <div className = {styles.buttonContainer}>
                <Link href ="/" >
                    <Image className = {styles.logo}
                    src = {logo}
                    alt = "logo"
                    width ={60}
                    height ={60}
                    priority={true}
                    />
                    <Image className = {styles.logoSmall}
                    src = {logo}
                    alt = "logo"
                    width ={50}
                    height ={50}
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
                // width={50}
                // height={50}
                width={2550}
                height={1274}
                 priority={true}
                sizes ={sizes}
                alt ={props.imageUrlAlt}
                />
            </div>
   </div>
    )
}