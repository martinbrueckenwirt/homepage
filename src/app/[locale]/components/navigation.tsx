"use client";

/*https://i18nexus.com/tutorials/nextjs/next-intl*/
/*https://www.youtube.com/watch?v=-vzz1L9MQRM */
/*burgerimage*/

/* pathnames siehe: https://next-intl-docs.vercel.app/docs/routing/navigation */
/*navigation.ts im /src*/

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import styles  from './navigation.module.css'
import React from 'react';
import { useState,useEffect } from "react";
import { MouseEvent } from 'react';
import { GetBurgerImageProps} from './types';
import { NavigationProps } from './types';
import {locales} from '../../../navigation';
import {useLocale, useTranslations} from 'next-intl';
import { navbarFont, h1Font, h2Font, h3Font, textFont, footerFont } from '../../../functions/fonts';
import phone from '../../../../public/telefon.webp';
import mail from '../../../../public/umschlag.png';
import open from '../../../../public/open_45x45.png';
import close from '../../../../public/close_45x45_red.png';
import logo from '../../../../public/Logo2023_250x37.webp';
import logosmall from '../../../../public/Logo2023_148x22.webp';
import german from '../../../../public/Deutschland_30x25.webp';
import english from '../../../../public/England_30x25.webp';
import italian   from '../../../../public/Italien_30x25.webp';
import Link from 'next/link';  
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
/*import Link from 'next-intl/link';*/



export default function Navigation({ home, appartment, cafe, contact, about}: NavigationProps) {
 
 
    const [topTransparent, setTopTransparent] = useState<boolean>(false);
    const [isBurgerMenueVisible, setIsBurgerMenueVisible]= useState<boolean>(false);
    const [isStartUp, setIsStartUp]= useState<boolean>(true);
    const {Link, useRouter, usePathname} = createSharedPathnamesNavigation({locales});
    const router = useRouter();
    let pathname = usePathname();

    
    let  phoneNumber: string = "+43664805563922";
    let  email: string = "office@derbrueckenwirt.at";
    const locale = useLocale();
  
  

    function setNewPath(lang:string) {
     
        if (lang === locale) return;
     
        router.replace( pathname, { locale: lang } );
        
        return;
    }

   
    

    const HorizontalRow = () => {
        return (
        <>
        <div className={styles.lineHorizontalContainer} >
             <div className={styles.lineHorizontal} />
        </div>
        </>
        )
    }

    

    // toggle burge Menue change

    const handleClickMenueToggle = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault(); /*verhindern, dass event 2x gefired wird */
         
        setIsBurgerMenueVisible(!isBurgerMenueVisible);
        setIsStartUp(false);
    }

    const handleClickBurgerMenue = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault(); /*verhindern, dass event 2x gefired wird */
        setIsBurgerMenueVisible(false);     
          
    }
    
 
    const GetBurgerImage  = (Props:GetBurgerImageProps):React.JSX.Element=> {

       

        let mySrc: StaticImageData = open;      
        if (Props.burgerMenueVisible === false) {
            mySrc = open;
        }
        else if (Props.burgerMenueVisible === true) {
            mySrc = close;
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
                        <div className = {`${styles.contactSpacer} ${navbarFont.className}`} ><a href={`tel:${phoneNumber}`}>+43 664 80 55 63 922</a> </div>
                </div>
                <div className={styles.contact}>
                <Image 
                src  = {mail}
                height = {20}
                width={20}
                alt = "Mail"
                />   
                        <div className={`${styles.contactSpacer} ${navbarFont.className}`}><a href={`mailto:${email}`}>office@derbrueckenwirt.at</a> </div>
                </div>
            </div>
            <div className = {styles.languages}>
                    <span className ={`${styles.languagesInRow} ${navbarFont.className}`} >
                        <div className={styles.languageChoser} onClick={() => setNewPath("de")} >
                            DE |
                        </div>
                        <div className={styles.languageChoser} onClick={() => setNewPath("en")}>
                            EN |
                        </div>
                        <div className={styles.languageChoser} onClick={() => setNewPath("it")}>
                            IT
                        </div>
                        
                </span>
            
            </div>
           
        </div>
        
      
       
    
    <nav className = {topTransparent === true 
        ? styles.navbar
        : styles.navbarTransparent 
        }>
   
        
     
  
        <div className = {styles.toggle} onClick={handleClickMenueToggle}>
            <input type='checkbox' id="navBurgerCheckbox" className={styles.checkboxInvisible}/>
                <label htmlFor="navBurgerCheckbox" >
                <GetBurgerImage burgerMenueVisible={isBurgerMenueVisible} />
                </label>  
            
        </div>
    
                
        <ul className={`${styles.menu} ${navbarFont.className}`}>
            <li> <Link href="/">{home}</Link></li>
            <li> <Link href="/appartement">{appartment}</Link> </li>
            <li> <Link href="/cafe">{cafe}</Link></li>
            <li> <Link href="/studio">{about}</Link> </li>
            <li> <Link href="/contact">{contact}</Link> </li>

        </ul>

    </nav>
{/* burger menue */}
        <div className={styles.visibility}> {/* ab600px*/}
            <div className={isBurgerMenueVisible === true
                ? `${styles.burgerMenue}`
                : isStartUp === true
                    ? `${styles.burgerMenuInvisible}`
                    : `${styles.burgerMenueSlideOut}`}>
                <div className = {`${styles.toggle} ${styles.close}`} onClick={handleClickMenueToggle}>
                     <input type='checkbox' id="navBurgerCheckbox2" className={styles.checkboxInvisible}/>
                    <label htmlFor="navBurgerCheckbox" >
                                    <GetBurgerImage burgerMenueVisible={isBurgerMenueVisible} />
                              
                    </label>  
            
                </div>
             
                <div className={`${navbarFont.className} ${styles.burgerMenueItems}`} onClick={handleClickBurgerMenue}>
                <ul >
                    <li> <Link href="/">{home}</Link></li>
                    <li> <Link href="/appartement">{appartment}</Link> </li>
                    <li> <Link href="/cafe">{cafe}</Link></li>
                    <li> <Link href="/studio">{about}</Link> </li>
                    <li> <Link href="/contact">{contact}</Link> </li>
                </ul>
                </div>
                
            </div>
        </div>

</>
    )
}