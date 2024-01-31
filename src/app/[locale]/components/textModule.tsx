import textStyles from './textModule.module.css';
import styles from './apartmentModule.module.css';
import {useTranslations} from 'next-intl';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';


export default function TextModule() {

        
    const t = useTranslations('home');
    let text1 = t('textmodul1');
   /* let text2 = t('textmodul2'); */
    let text3 = t('textmodul3');
    /*let text4 = t('textmodul4'); */
    let text5 = t('textmodul5');
    let text6 = t('textmodul6');
    let text7 = t('textmodul7');



      /* Muster für zb "<important> abc </important" */
        /*"b" ist im Json , muss hier sonderbehandelt werden */
      let text2 = t.markup('textmodul2',{ b:(chunks) => `<b>${chunks}</b>`}) 
      
    let text4 = t.markup('textmodul4',{
        b:(chunks) => `<b>${chunks}</b>`
   
    }) 



  return (
      <div className={styles.apartmentCard}>
        <h3 className={`${h1Font.className} ${textStyles.textModule}`}>
           <p dangerouslySetInnerHTML={{__html: t.raw('textmodul1')}} />
           <p dangerouslySetInnerHTML={{__html: t.raw('textmodul2')}} />
           <p dangerouslySetInnerHTML={{__html: t.raw('textmodul3')}} />
           <p dangerouslySetInnerHTML={{__html: t.raw('textmodul4')}} />
           <p dangerouslySetInnerHTML={{__html: t.raw('textmodul5')}} />
           <p dangerouslySetInnerHTML={{__html: t.raw('textmodul6')}} />
           <p dangerouslySetInnerHTML={{__html: t.raw('textmodul7')}} />
         
        </h3>
    </div>  
    )
}

