import styles  from './cafeModule.module.css';
import Image from 'next/image'
import Link from 'next/link';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';
import {useTranslations} from 'next-intl';
import Bild1 from '../../../../public/P2677228-1_hoch.webp'
import Bild2 from '../../../../public/P2566177-1.webp'
import Bild3 from '../../../../public/P2506075-1_quadrat.webp'
import Bild4 from '../../../../public/P1270601_hoch.webp'


export default function CafeModule() {

    const t = useTranslations('cafe');

    let text1: string = t('text1');
    let text2: string = t('text2');
    let text3: string = t('text3');
    let text4: string = t('text4');
    let text5: string = t('text5');
    let text6: string = t('text6');
    let text7: string = t('text7');
    let text8: string = t('text8');
  

    let altBild1: string = t('altBild1');
    let altBild2: string = t('altBild2');
    let altBild3: string = t('altBild3');
    let altBild4: string = t('altBild4');
    
  
  
/* Muster für zb "<important> abc </important" */
    let quote = t.markup('quote',{
        q:(chunks) => `"${chunks}"`
   
    })     
return (

<>

<div className ={styles.outerWrapper}>

<div>
    <span className ={`${h1Font.className} ${styles.quote}`}> {quote} </span>
    <span className ={`${h1Font.className} `}> Lukas.H </span>
    
</div>
<div className ={styles.wrapper}>
    <div className ={styles.box1}>
    <Image
    src =  {Bild1}
    height= {800}
    width = {615}
    alt={altBild1}
    priority = {false}
    sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
      
    />
    </div>
    <div className ={`${h1Font.className} ${styles.box2}`}>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{text4}</p>
        <p>{text5}</p>
        <p>{text6}</p>
        <p>{text7}</p>

    
    </div>
    <div className ={styles.box3}>
   
    <Image
    src =  {Bild2}
    height= {450}
    width = {600}
    alt={altBild1}
    priority = {false}
    sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
      
    />
    
    </div>
    <div className ={styles.box4}>
    <Image
  
    src =  {Bild4}
    height= {400}
    width = {350}
    alt={altBild1}
    priority = {false}
    sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
      
    />
   
    </div>

    <div className ={`${h1Font.className} ${styles.box6}`}>
    <Image
  
  src =  {Bild3}
  height= {400}
  width = {400}
  alt={altBild1}
  priority = {false}
  sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"
    
  />
    </div>

    <div className ={`${h1Font.className} ${styles.box5}`}>
        <p>{text8}</p>
    </div>
    
    
</div>

</div>

</>)
}