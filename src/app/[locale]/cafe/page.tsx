'use client';
import styles  from './page.module.css' 
import { useLocale,useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server'; 
import { useState, useEffect} from 'react';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {locales} from '../../../navigation';
import Booking from '../components/booking';
import Script from 'next/script';


export default function Cafe({params: {locale}}: {params: {locale: any}}) {
    /*const locale = useLocale();*/
  
    const {useRouter, usePathname} = createSharedPathnamesNavigation({locales});
    const [myLanguage, setMyLanguage] = useState<string>('');
    const [render, setRender] = useState(false);
    const router = useRouter();
    let pathname = usePathname();
    locale= useLocale();
    const reloadPage = () => {
        console.log('reloadPage')
        router.push(pathname);
        /*router.reload();*/
        setTimeout(() => {
            
        }, 5000);
        
    };
    
 
    const [htmlStringEN, setHtmlStringEN] = useState<string>(`
<div id="vri-container-20845"></div>
<script type="text/javascript">
	( function ( v, i, o, m, a ){
		if ( !( o in v ) ) {
			v.vioma_vri=o;
			v[o] || ( v[o] = function ( ){ ( v[o].q = v[o].q || [] ).push ( arguments ); } );
			m = i.createElement( 'script' ), a = i.scripts[0];
			m.src = 'https://cst-client-hotel-brueckenwirt.viomassl.com/js/vri/vri.js';
			a.parentNode.insertBefore ( m, a );
		}
	} )( window, document, 'vcst' );
	vcst( {load: 'init', url: 'https://cst-client-hotel-brueckenwirt.viomassl.com/', set_language: 'en'} );
	vcst( {id: 20845} );
</script>
`);
const [htmlString, setHtmlString] = useState<string>("hallo");

useEffect(() => {
 /*   setMyLanguage('de'); /*default*/
setRender(true); 
    console.log('booking useEffect ', locale,render);
   
},[locale]);

        return (
            
        <>    

        <Script
        type="text/javascript"
            function ( v, i, o, m, a ){
                if ( !( o in v ) ) {
                    v.vioma_vri=o;
                    v[o] || ( v[o] = function ( ){ ( v[o].q = v[o].q || [] ).push ( arguments ); } );
                    m = i.createElement( 'script' ), a = i.scripts[0];
                    m.src = 'https://cst-client-hotel-brueckenwirt.viomassl.com/js/vri/vri.js';
                    a.parentNode.insertBefore ( m, a );
                }
            } ( window, document, 'vcst' );
            vcst( {load: 'init', url: 'https://cst-client-hotel-brueckenwirt.viomassl.com/', set_language: 'en'} );
            vcst( {id: 20845} );

        />
            <div className={styles.test} dangerouslySetInnerHTML={{ __html: htmlStringEN }}/> 
            <div id="vri-container-20845"></div>
          </> 
            );
            
} 