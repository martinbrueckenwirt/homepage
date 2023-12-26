import styles  from './textModule.module.css';
import {useTranslations} from 'next-intl';
import { heroFont, h1Font, h2Font, h3Font, textFont, footerFont } from '@/src/functions/fonts';


export default function TextModule() {

        
    const t = useTranslations('home');
    let text = t('textmodul');
    return (
        <h3 className={`${h1Font.className} ${styles.textModule}`}>
           <div dangerouslySetInnerHTML={{__html: t.raw('textmodul')}} />
         
        </h3>

    )
}

