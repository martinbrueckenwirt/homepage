'use client';

/*https://i18nexus.com/tutorials/nextjs/next-intl*/
/*https://www.youtube.com/watch?v=-vzz1L9MQRM */
/*burgerimage*/

import Image from 'next/image'
import styles  from './navigation.module.css'
import React from 'react';
import { useState } from "react";
import { MouseEvent } from 'react';
import { GetBurgerImageProps} from './types';
import { NavigationPropsNew } from './types';
import { useRouter, usePathname } from 'next/navigation';
import LanguageChanger from './languageChanger';

import phone from '../../../../public/telefon.webp';
import mail from '../../../../public/umschlag.png';
import open from '../../../../public/open_45x45.png';
import close from '../../../../public/close_45x45.png';
import logo from '../../../../public/logo_mit_schrift_small.png';
import german from '../../../../public/deutsch.webp';
import english from '../../../../public/englisch.webp';
import italian   from '../../../../public/italienisch.webp';
import Link from 'next/link';  


export default function Navigation({ transparency, appartement, cafe, contact, about, locale, castleview,castleviewpricing}: NavigationPropsNew) {

    
    /*const t = useTranslations('Navigation'); */
    /*const t = await getTranslations('Navigation');*/
    const [topTransparent, setTopTransparent] = useState<boolean>(false);
    const [isBurgerMenueVisible, setIsBurgerMenueVisible]= useState<boolean>(false);
    /*const [isBurgerMenueClicked, setIsBurgerMenueClicked]= useState<boolean>(false);   *a* */
    const [menueSlide,setMenueSlide]=useState<string> ("unClicked") /*funktioniert das?? *a* Hilfskonstrukt für Transform des slide-InMenue*/
 
    const router = useRouter();
    const pathname = usePathname();
  
    const handleChange = e => {
      router.push(pathname, { locale: e.target.value });
    };

    // toggle burge Menue change

    const handleClickMenueToggle = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault(); /*verhindern, dass event 2x gefired wird */
         
        setIsBurgerMenueVisible(!isBurgerMenueVisible);
        if (isBurgerMenueVisible === true){
                setMenueSlide("unclicked") /*umgekehrte Darstellung */
        } 
        else  setMenueSlide("clicked")
              
    }
    
 
    const GetBurgerImage  = (Props:GetBurgerImageProps):React.JSX.Element=> {
        /*component Startmit Großbuchstabe*/

        let mySrc: string = '/open_45x45.png';      
        if (Props.burgerMenueVisible === false) {
              mySrc = '/open_45x45.png';
            }
        else if (Props.burgerMenueVisible === true) {
            mySrc = '/close_45x45.png';
        }
   
        return (<Image 
                src={mySrc}
                height = {45}
                width={45}
                alt= "öffnen"
            />)
    }
    return (


        <>
        <div className = {topTransparent === true 
            ? styles.topBar
            : styles.topBarTransparent     
            }>
            <div className = {styles.telefoneMailWrapper}>
                <div className={styles.contact}>

                    <Image 
                        src = {phone}
                        height = {20}
                        width={20}
                        alt="Telefon"
                        />   
                    <div className = {styles.contactSpacer}>+43 664 80 55 63 922 </div>
                </div>
                <div className={styles.contact}>
                <Image 
                src  = {mail}
                height = {20}
                width={20}
                alt = "Mail"
                />   
                 <div className = {styles.contactSpacer}>martin@derbrueckenwirt.at</div>
                </div>
            </div>
            <div className = {styles.languages}>
                <span >
                    <ul className ={styles.languagesInRow}>
                       <li><LanguageChanger locale={locale}/> </li>
                       
                        <li className = {styles.languageChoser}><a href="#">                
                            <Image src={german}
                            alt = "Deutsch"
                            height ={20}
                            width ={25}
                            />
                            </a>
                            </li>
                        <li className = {styles.languageChoser}><a href="#">
                            <Image src={english}
                            alt = "Englisch"
                            height ={20}
                            width ={25}
                            />
                             </a></li>
                        <li className = {styles.languageChoser}><a href="#">
                        <Image src={italian}
                            alt = "italienisch"
                            height ={20}
                            width ={25}
                            />
                            
                        </a></li>
                    </ul>
                </span>
            
            </div>
        </div>
    
    <nav className = {topTransparent === true 
        ? styles.navbar
        : styles.navbarTransparent 
        }>
        <a href ="#" className = {styles.logo}>
            <Image 
            src = {logo}
            alt = "logo"
            width ={130}
            height ={30}
            />
        </a>
            
        
        <div className = {styles.toggle} onClick={handleClickMenueToggle}>
            <input type='checkbox' id="navBurgerCheckbox" className={styles.checkboxInvisible}/>
                <label htmlFor="navBurgerCheckbox" >
                    <GetBurgerImage burgerMenueVisible={isBurgerMenueVisible} />
                </label>  
            
        </div>
     
                
        <ul className={styles.menu}>
            <li> <a href="/appartement">{appartement}</a></li>
            <li><a href="/cafe">{cafe}</a></li>
            <li><a href="#">{about}</a></li>
            <li><a href="#">{contact}</a></li>

        </ul>

    </nav>
{/* burger menue */}
        <div className={styles.visibility}>
            <div className={isBurgerMenueVisible === true
                    ? `${styles.burgerMenue}`
                    : `${styles.burgerMenueInvisible}`}>
                <ul >
                    <li><a href="/appartement">{appartement}</a></li>
                    <li><a href="/cafe">{cafe}</a></li>
                    <li><a href="#">{about}</a></li>
                    <li><a href="#">{contact}</a></li>

                </ul>
            </div>
        </div>

</>
    )
}