import styles from './page.module.css';
import { useTranslations } from 'next-intl';
import { heroFont, h1Font,handwriting, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';

export default function BookingConditions({ params: { locale } }: { params: { locale: any } }) {
    

    const t = useTranslations('bookingConditions');

    const h1 = t('h1');
    const priceApartment = t('priceApartment');
    const priceApartmentText1 = t('priceApartmentText1');
    // const priceApartmentText2 = t('priceApartmentText2');
    const priceApartmentText3 = t('priceApartmentText3');   
    const priceApartmentText4 = t('priceApartmentText4');   

    const h2 = t('h2');
    const h2Text1 = t('h2Text1');
    const h3 = t('h3');
    const h3Text1 = t('h3Text1');
    const h3Text2 = t('h3Text2');
    const h3Text3 = t('h3Text3');
    const h3Text4 = t('h3Text4');
    const h3Text5 = t('h3Text5');
    const h3Text6 = t('h3Text6');
    const h3Text7 = t('h3Text7');
    const h3Text8 = t('h3Text8');
    const h3Text9 = t('h3Text9');
    const h4 = t('h4');
    const h4Text1 = t('h4Text1');
    const h5 = t('h5');
    const h5Text1 = t('h5Text1');
    const h5Text2 = t('h5Text2');
    const h6 = t('h6');
    const h6Text1 = t('h6Text1');
    const h7 = t('h7');
    const h7Text1 = t('h7Text1');
    const h7Text2 = t('h7Text2');   
    const h8 = t('h8');
    const h8Text1 = t('h8Text1');
    const h9 = t('h9');
    const h9Text1 = t('h9Text1');
    const h9Text2 = t('h9Text2');
    const h10 = t('h10');
    const h10Text1 = t('h10Text1');
    const h11 = t('h11');
    const h11Text1 = t('h11Text1');
    const h12 = t('h12');
    const h12Text1 = t('h12Text1');
   

     return (
         <> 
             
    <div className={`${h1Font.className} ${styles.Container}` }>
        <div className={styles.h1}>
            {h1}
        </div>
        <div className={styles.headline}>
            {priceApartment}
        </div>
            <div >
                <p className={styles.text}> {priceApartmentText1} </p> 
               
                <p className={styles.text}> {priceApartmentText3} </p>
                <p className={styles.text}> {priceApartmentText4} </p>
            </div>
      
        <div className={styles.headline}>
            {h2}
        </div>
            <div >
                <p className={styles.text}> {h2Text1} </p> 
                 </div>
        <div className={styles.headline}>
            {h3}
        </div>
            <div >
                <p className={styles.text}> {h3Text1} </p> 
                <p className={styles.text}> {h3Text2} </p> 
                <p className={styles.text}> {h3Text3} </p>
                <p className={styles.text}> {h3Text4} </p> 
                <p className={styles.text}> {h3Text5} </p> 
                <p className={styles.text}> {h3Text6} </p>
                <p className={styles.text}> {h3Text7} </p> 
                <p className={styles.text}> {h3Text8} </p> 
                <p className={styles.text}> {h3Text9} </p>     
             </div>
         <div className={styles.headline}>
            {h4}
        </div>
            <div >
                <p className={styles.text}> {h4Text1} </p> 
                 </div>   
        <div className={styles.headline}>
            {h5}
        </div>
        <div >
            <p className={styles.text}> {h5Text1} </p> 
            <p className={styles.text}> {h5Text2} </p> 
        </div>   
        <div className={styles.headline}>
            {h6}
        </div>
        <div >
            <p className={styles.text}> {h6Text1} </p> 
        </div>   
        <div className={styles.headline}>
            {h7}
        </div>
        <div >
            <p className={styles.text}> {h7Text1} </p> 
           <p className={styles.text}> {h7Text2} </p> 
        </div>   
        <div className={styles.headline}>
            {h8}
        </div>
        <div >
            <p className={styles.text}> {h8Text1} </p> 
        </div>          
         <div className={styles.headline}>
            {h9}
        </div>
        <div >
           <p className={styles.text}> {h9Text1} </p> 
           <p className={styles.text}> {h9Text2} </p> 
        </div> 
         <div className={styles.headline}>
            {h10}
        </div>
        <div >
           <p className={styles.text}> {h10Text1} </p> 
                 </div>  
         <div className={styles.headline}>
            {h11}
        </div>
        <div >
           <p className={styles.text}> {h11Text1} </p> 
        </div>           
         <div className={styles.headline}>
            {h12}
        </div>
        <div >
           <p className={styles.text}> {h12Text1} </p> 
        </div> 
    </div>
        </>
    )
}