import styles from './footer.module.css' 
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import  facebook  from '../../../../public/facebook.webp';
import  instagram  from '../../../../public/instagram_2111463.webp';

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <>
        <div className={styles.test}> {t('Einleitung')}  Footer</div>
        
         <div className={styles.image}> 
            <Image src={facebook} alt="Facebook" width={30} height={30} />
        
            <Image src={instagram} alt="Instagram" width={30} height={30} />
        </div>
        </>
    )
} 