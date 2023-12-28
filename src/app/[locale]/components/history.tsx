import styles  from './history.module.css';
import Image from 'next/image'
import Link from 'next/link';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';
import {useTranslations} from 'next-intl';
import Bild1 from '../../../../public/BrueckenwirtVorHochwasser.webp'
import Bild2 from '../../../../public/BrueckenwirtHochwasser.webp'
import Bild3 from '../../../../public/P2674019-1.webp'



export default function History() {

    const t = useTranslations('history');

   
  /*  let beginning = t.markup('beginning',{
        b:(chunks) => `<b>${chunks}</b>`
   
   }) 
    */

   

    let altBild1: string = t('altImage1');
    let altBild2: string = t('altImage2');
    let altBild3: string = t('altImage3');
  
    
  
  

return (

<>

<div className ={styles.outerWrapper}>


<div className ={styles.wrapper}>
    <div className ={styles.box1}>
    <Image
    src =  {Bild1}
    height= {300}
    width = {400}
    alt={altBild1}
    priority = {false}
    sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
      
    />
    </div>
    <div className ={`${h1Font.className} ${styles.box2}`}>
        <div dangerouslySetInnerHTML={{__html: t.raw('beginning')}}></div> 
        <div dangerouslySetInnerHTML={{__html: t.raw('beginning2')}}></div> 
        <div dangerouslySetInnerHTML={{__html: t.raw('beginning3')}}></div> 
        
    </div>
    <div className ={styles.box3}>
    <Image
    src =  {Bild2}
    height= {300}
    width = {400}
    alt={altBild1}
    priority = {false}
    sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
      
    />
    </div>
     <div className ={`${h1Font.className} ${styles.box4}`}>
     <div dangerouslySetInnerHTML={{__html: t.raw('highWater')}}></div> 
        <div dangerouslySetInnerHTML={{__html: t.raw('highWater2')}}></div> 
        <div dangerouslySetInnerHTML={{__html: t.raw('highWater3')}}></div> 
    </div>

    <div className ={styles.box5}>
    <Image
    src =  {Bild3}
    height= {300}
    width = {400}
    alt={altBild1}
    priority = {false}
    sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
      
    />
    </div>
    
    <div className ={`${h1Font.className} ${styles.box6}`}>
    <div dangerouslySetInnerHTML={{__html: t.raw('revitalisation')}}></div> 
    </div>
    
</div>

</div>

</>)
}