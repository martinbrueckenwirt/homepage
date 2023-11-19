import React from 'react';
import styles from './burgermenue.module.css';
import { BurgerMenueProps } from '../components/types';

const BurgerMenue = (props:BurgerMenueProps)  => {

if  (props.visibility === true) {
    return(
        <div className = {`${styles.burgerMenue} ${props.menueSlide}`}>
                <ul >
                    <li> <a href="#">Apartements</a></li>
                    <li><a href="#">Cafe</a></li>
                    <li><a href="#">über uns</a></li>
                    <li><a href="#">Kontakt</a></li>

                </ul>
        </div>
    )}
    
else return null

}

export default BurgerMenue;