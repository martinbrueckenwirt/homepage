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
import { navbarFont, h1Font, h2Font, h3Font, textFont, footerFont } from '../../../functions/fonts';
import phone from '../../../../public/telefon.webp';
import mail from '../../../../public/umschlag.png';
import open from '../../../../public/open_45x45.png';
import close from '../../../../public/close_45x45.png';
import logo from '../../../../public/Logo2023_250x37.webp';
import logosmall from '../../../../public/Logo2023_148x22.webp';
import german from '../../../../public/Deutschland_30x25.webp';
import english from '../../../../public/England_30x25.webp';
import italian   from '../../../../public/Italien_30x25.webp';
import Link from 'next/link';  

export default function Navigation({ transparency, home, appartment, cafe, contact, about, locale}: NavigationPropsNew) {
 
 
    const [topTransparent, setTopTransparent] = useState<boolean>(false);
    const [isBurgerMenueVisible, setIsBurgerMenueVisible]= useState<boolean>(false);
    /*const [isBurgerMenueClicked, setIsBurgerMenueClicked]= useState<boolean>(false);   *a* */
    const [menueSlide,setMenueSlide]=useState<string> ("unClicked") /*funktioniert das?? *a* Hilfskonstrukt für Transform des slide-InMenue*/
 
    const router = useRouter();
    const pathname = usePathname();
    const pathWithoutLang = pathname.substring(4);

    function getNewPath(lang) {
        let newPath = lang.concat(pathWithoutLang);  
        locale = lang.substring(1,2);
    return (newPath)
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

    const TopLogoContainer = () => {
        return (
        <>
        <div className={styles.logoContainer} >
        <a href ="/" className = {styles.logo}>
            <Image 
            src = {logo}
            alt = "logo"
            width ={250}
            height ={37}
            />
        </a>
        <a href ="/" className = {styles.logoBurgersize}>
            <Image 
            src = {logosmall}
            alt = "logo"
            width ={148}
            height ={22}
            />
        </a>
        </div>
        </>
        )
    }

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
                height = {30}
                width={45}
                alt= "öffnen"
            />)
    }
    return (


        <>
       <TopLogoContainer />
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
                        <div className = {`${styles.contactSpacer} ${navbarFont.className}`} >+43 664 80 55 63 922 </div>
                </div>
                <div className={styles.contact}>
                <Image 
                src  = {mail}
                height = {20}
                width={20}
                alt = "Mail"
                />   
                        <div className={`${styles.contactSpacer} ${navbarFont.className}`}>martin@derbrueckenwirt.at</div>
                </div>
            </div>
            <div className = {styles.languages}>
                <span >
                    <ul className ={styles.languagesInRow}>
                        <li className = {styles.languageChoser}><Link href={getNewPath('/de/')}> <Image src={german} alt="german" width={30} height={25} />  </Link> </li>
                        <li className = {styles.languageChoser}><Link href={getNewPath('/en/')}> <Image src={english} alt="english" width={30} height={25} /> </Link></li>
                        <li className = {styles.languageChoser}><Link href={getNewPath('/it/')}> <Image src={italian} alt="italian" width={30} height={25} /> </Link></li>
                    </ul>
                </span>
            
            </div>
           
        </div>
        
      
       
    
    <nav className = {topTransparent === true 
        ? styles.navbar
        : styles.navbarTransparent 
        }>
   
  
        <a href ="#" className = {styles.logo}>
    {/* *a* Add your comment here */}
        </a>
    
        <a href ="#" className = {styles.logoBurgersize}>
           
        </a>
            
     

        <div className = {styles.toggle} onClick={handleClickMenueToggle}>
            <input type='checkbox' id="navBurgerCheckbox" className={styles.checkboxInvisible}/>
                <label htmlFor="navBurgerCheckbox" >
                    <GetBurgerImage burgerMenueVisible={isBurgerMenueVisible} />
                </label>  
            
        </div>
     
                
        <ul className={`${styles.menu} ${navbarFont.className}`}>
            <li> <a href="/">{home}</a></li>
            <li> <a href="/appartement">{appartment}</a></li>
            <li><a href="/cafe">{cafe}</a></li>
            <li><a href="#">{about}</a></li>
            <li><a href="/contact">{contact}</a></li>

        </ul>

    </nav>
{/* burger menue */}
        <div className={styles.visibility}>
            <div className={isBurgerMenueVisible === true
                    ? `${styles.burgerMenue}`
                    : `${styles.burgerMenueInvisible}`}>
                <ul >
                    <li> <a href="/">{home}</a></li>
                    <li><a href="/appartement">{appartment}</a></li>
                    <li><a href="/cafe">{cafe}</a></li>
                    <li><a href="#">{about}</a></li>
                    <li><a href="/contact">{contact}</a></li>

                </ul>
            </div>
        </div>

</>
    )
}