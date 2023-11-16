"use client"

import Image from 'next/image'
import styles  from './page.module.css'
import { useEffect, useState } from "react";
import React from 'react';
import { MouseEvent } from 'react';
import { GetBurgerImageProps } from '../components/types';

/*<!--*a* href austauschen--> */



export default function Home() {

    const [clientWindowHeight, setClientWindowHeight] = useState(0);
    const [topTransparent, setTopTransparent] = useState(false);
    const [burgerClass, setBurgerClass] = useState("burgerbarUnclicked");
    const [burgerMenueClass, setBurgerMenueClass] = useState("menuHidden");
    const [isBurgerMenueClicked, setIsBurgerMenueClicked] = useState(false);
  

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      });

      const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
      };

      useEffect(() => {
        let cursorMovement = clientWindowHeight;
        if (cursorMovement > 50){
            setTopTransparent(false);
        }
        else
            setTopTransparent(true)
       
    }, [clientWindowHeight]);


    // toggle burge Menue change


    const handleClickMenueToggle = (event: React.MouseEvent<HTMLDivElement, React.MouseEvent<Element, globalThis.MouseEvent>>) => {
        console.log('im handle click');
        if (!isBurgerMenueClicked){
            setBurgerClass("burgerbarClicked")
            setBurgerMenueClass("menueVisible")
        }       
        else{
            setBurgerClass("burgerbarUnclicked")
            setBurgerMenueClass("menueHidden")
        }
    }
    
 
    const GetBurgerImage  = (Props:GetBurgerImageProps):React.JSX.Element=> {
        /*component Startmit Großbuchstabe*/

        let mySrc: string = "/open_45x45.png";
        console.log(Props.isMenueVisible);
        if (Props.isMenueVisible === "menueHidden") {
              mySrc = "/open_45x45.png"
            }
        else if (Props.isMenueVisible === "menueVisible") {
            mySrc = "/close_45x45.png"
        }
   
        return (<Image className={styles.dropdownToopen}
            
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

        <div className = {styles.toggle}
                    onClick={handleClickMenueToggle}>
                    
                    <input type='checkbox' id="navBurgerCheckbox" className={styles.invisible}/>
                    <label htmlFor="navBurgerCheckbox" >
                        <GetBurgerImage isMenueVisible={burgerMenueClass} />
                    </label>
            
        </div>

        <ul className = {styles.menu}>
            <li> <a href="#">Apartements</a></li>
            <li><a href="#">Cafe</a></li>
            <li><a href="#">über uns</a></li>
            <li><a href="#">Kontakt</a></li>

        </ul>

    </nav>


    <div className = {styles.content}>
        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
        </p>

        <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
        </p>

    </div>

</>
    )
}