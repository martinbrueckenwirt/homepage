import styles from './pricingTableVarious.module.css'
import { heroFont, h1Font,h2Font, h3Font,textFont, footerFont } from '@/src/functions/fonts';
import pricesGeneral from '../../../../data/pricesGeneral'
import { useTranslations } from 'next-intl';


const PricingTableVarious = () => {
    const t = useTranslations('pricingTableVarious');

    let finalCleaning = t('finalCleaning');
    let breakfast = t('breakfast');
    let localTax = t('localTax');
    let pets = t('pets');
    
    return (
        <>
        <div className={styles.priceContainer}> 
            <div className={`${h1Font.className} ${styles.row}`}>        
                <div className={styles.box1}>{finalCleaning}</div> 
                <div className={styles.box2}>{pricesGeneral.finalCleaning}</div>      
                <div className={styles.box3}>{breakfast}</div> 
                <div className={styles.box4}>{pricesGeneral.breakfast}</div>      
            </div>
            <div className={`${h1Font.className} ${styles.row}`}>           
                <div className={styles.box5}>{localTax}</div> 
                <div className={styles.box6}>{pricesGeneral.localTax}</div>      
                <div className={styles.box7}>{pets}</div> 
                <div className={styles.box8}>{pricesGeneral.pets}</div>      
            </div>


        </div>
        
        
        </>

    )

}

export default PricingTableVarious;