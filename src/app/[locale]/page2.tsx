
import React, { use } from 'react';

import styles from "../[locale]/components/gallery.module.css";

import Gallery from './components/gallery';

import {h1Font, h2Font, h3Font, heroFont, textFont, footerFont} from '../../functions/fonts'

import { GalleryImage } from './components/types';
/* <Aptest appartmentTyp = {'A'}>/</Aptest>   */

export default async function Page(): Promise<JSX.Element> {
    // ...

    let myAppartmentType = 'A'

    return (
     
        <Gallery appType ={'A'}/>
       
        
    )
}




