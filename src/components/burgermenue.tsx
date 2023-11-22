import React from 'react';
import styles from './burgermenue.module.css';
import { BurgerMenueProps } from '../components/types';

const BurgerMenue = (props:BurgerMenueProps)  => {

if  (props.visibility === true) {
    return(
        <div >
                <ul >
                    <li> <a href="#">Apartements burger</a></li>
                    <li><a href="#">Cafe</a></li>
                    <li><a href="#">über uns</a></li>
                    <li><a href="#">Kontakt</a></li>

                </ul>
        </div>
    )}
    
else return null

}

export default BurgerMenue;