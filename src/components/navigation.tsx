import Image from 'next/image'
import styles  from './navigation.module.css'
import React from 'react';
import { useState, useEffect } from "react";
import { MouseEvent } from 'react';
import { GetBurgerImageProps} from '../components/types';
import { NavigationProps } from '../components/types';
import { Console } from 'console';


/*<!--*a* href austauschen--> */



export default  function Navigation({windowScrollPosition, transparency}: NavigationProps) {

    const [topTransparent, setTopTransparent] = useState<boolean>(false);
    const [isBurgerMenueVisible, setIsBurgerMenueVisible]= useState<boolean>(false);
    /*const [isBurgerMenueClicked, setIsBurgerMenueClicked]= useState<boolean>(false);   *a* */
    const [menueSlide,setMenueSlide]=useState<string> ("unClicked") /*Hilfskonstrukt für Transform des slide-InMenue*/
 
    calculateVisibility(windowScrollPosition, transparency);
   

    function calculateVisibility(windowScrollPosition: number,transparency:boolean)
    {

        console.log('3' );
        if (transparency === false) {setTopTransparent(false)} 

        else{

            useEffect(() => {
                if (windowScrollPosition > 50){
                    setTopTransparent(false);
                }
                else
                    setTopTransparent(true)
            }                      
            , [windowScrollPosition]);
        }

           
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

        let mySrc: string = "/open_45x45.png";
       
        if (Props.burgerMenueVisible === false) {
              mySrc = "/open_45x45.png"
            }
        else if (Props.burgerMenueVisible === true) {
            mySrc = "/close_45x45.png"
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
                        src = "/telefon.png"
                        height = {20}
                        width={20}
                        alt="Telefon"
                        />   
                    <div className = {styles.contactSpacer}>+43 664 80 55 63 922 </div>
                </div>
                <div className={styles.contact}>
                <Image 
                src = "/umschlag.png"
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
                        <li className = {styles.languageChoser}><a href="#">de</a></li>
                        <li className = {styles.languageChoser}><a href="#">en</a></li>
                        <li className = {styles.languageChoser}><a href="#">it</a></li>
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
            src = "/logo_mit_schrift_small.png"
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
            <li> <a href="#">Apartements</a></li>
            <li><a href="#">Cafe</a></li>
            <li><a href="#">über uns</a></li>
            <li><a href="#">Kontakt</a></li>

        </ul>

    </nav>
{/* burger menue */}
        <div className={styles.visibility}>
            <div className={isBurgerMenueVisible === true
                    ? `${styles.burgerMenue}`
                    : `${styles.burgerMenueInvisible}`}>
                <ul >
                    <li><a href="#">Apartements burger</a></li>
                    <li><a href="#">Cafe</a></li>
                    <li><a href="#">über uns</a></li>
                    <li><a href="#">Kontakt</a></li>

                </ul>
            </div>
        </div>

</>
    )
}