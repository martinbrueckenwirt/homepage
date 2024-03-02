import styles from './footer.module.css' 
import { footerFont, handwriting } from '@/src/functions/fonts';
import { FooterProps } from './types';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import  facebook  from '../../../../public/facebook.webp';
import  instagram  from '../../../../public/instagram_2111463.webp';
import logo from '../../../../public/logo_mit_schrift.png';
import { useTransition } from 'react';

export default function Footer({ locale, home, appartment, cafe, contact, about, imprint}: FooterProps) {

    const t = useTranslations('footer');
    let text = t('text');
    let linkFacebook = 'https://www.facebook.com/derBrueckenwirt1/';
    let linkInstagram = 'https://www.instagram.com/brueckenwirt/';
    let linkHome = `/${locale}`;
    let linkAppartment = `/${locale}/appartement`;
    let linkCafe = `/${locale}/cafe`;
    let linkAbout = `/${locale}/about`;
    let linkContact = `/${locale}/contact`;
    let linkImprint = `/${locale}/imprint`;

    return (
        <>
        <div className={`${footerFont.className} ${styles.footerContainer}`}> 
           
            <div className={styles.linkContainer}>
                <div className={styles.socialContainer}>
                <Link target="blank" href = {linkFacebook}>
                    <Image className={styles.image} src={facebook} 
                       alt="Facebook" width={30} height={30} />
                </Link>
                <Link target="blank" href = {linkInstagram}>
                    <Image className={styles.image} src={instagram} alt="Instagram" width={30} height={30} />
                </Link>
            </div>

            
                <ul className={styles.menu} >    
                    <li> <Link href={linkHome}>{home}</Link></li>
                    <li> <Link href={linkAppartment}>{appartment}</Link> </li>
                    <li> <Link href={linkCafe}>{cafe}</Link></li>
                    <li> <Link href={linkAbout}>{about}</Link> </li>
                    <li> <Link href={linkContact}>{contact}</Link> </li>
                    <li> <Link href={linkImprint}>{imprint}</Link> </li>
                </ul>
            </div>

            <div className={styles.logoContainer}>
                <div className={`${handwriting.className} ${styles.text}`}>
                    {text}
                </div>
                <Image className={styles.logo} src={logo} alt="Logo" width={250} height={37} />
            </div>
           
        </div>
        </>
    )
} 