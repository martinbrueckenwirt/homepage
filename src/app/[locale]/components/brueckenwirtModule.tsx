
import styles  from './apartmentModule.module.css';
import Image from 'next/image'
import {useTranslations} from 'next-intl';
import Brueckenwirt from '../../../../public/P1540068.jpg'

export default function BrueckenwirtModule() {

    let brueckenwirtImageAlt: string = "Brückenwirt";
    
    const t = useTranslations('home');
   
return (
<>

<div className={styles.apartmentCardContainer}>
<div className={styles.apartmentCard}>

    <div className ={styles.image}> 
           
        <Image
            fill={true}
            /*width={300}
            height={300}*/
            /*objectFit='contain' */
            priority={false}
            src={Brueckenwirt}
            sizes ="(max-width:580px) 100vw, (max-width:1024px) 50vw, 33vw)"

            alt ={brueckenwirtImageAlt} 
                
        />
		
     </div>
                         
            
</div>
</div>
</>


)

}