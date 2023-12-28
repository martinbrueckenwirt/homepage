import {notFound} from 'next/navigation';
import Navigation from './components/navigation';
import Footer from './components/footer'
import { NavigationPropsNew } from './components/types';
import { Metadata } from 'next';
import  JsonLD  from "../../../data/metadata";
import '../styles/globalStyles.css';
import { useTranslations } from 'next-intl';
import React from 'react';
import Loading from './loading';
import { Suspense } from 'react';

/*das ist nur der Default, je page werden diese Informationen neu gesetzt*/
/* *a* Photo */



export const metadata: Metadata = {
  metadataBase: new URL('https://www.derbrueckenwirt.at/'),
  title: "Moderne Appartements Ferienwohnungen direkt am Schigebiet Osttirol",
  description: "Moderne Appartements / Ferienwohnungen direkt am Schigebiet Sillian / Thurntaler für Ihren perfekten Urlaub in Osttirol; 2-6 Personen; sehr kinderfreundlich, großer Garten, 32m²- 85m²; hochwertige Ausstattung; Frühstücksbuffet im Haus, Cafe mit perfektem Cappucino im Erdgeschoß.",
  applicationName: "Brückenwirt Appartements",
  referrer: 'origin-when-cross-origin',
  keywords: ["Appartement", "Ferienwohnung","Osttirol", "Sillian", "Thurntaler", "Schigebiet", "Urlaub", "Familienurlaub", "kinderfreundlich", "Wandern", "Mountainbiken", "Dolomiten", "Hochpustertal","Urlaub mit Hund"],
  verification: {
    google: "google3134a8bd7a2aec41",
  },
  other: {
    type: "hotel",
    name: "Brueckenwirt Appartements",
    adresscountry: "Austria",
    adresslocality: "Sillian",
    postalcode: "9920",
    streetaddress: "Panzendorf 12",
    email: "office@derbrueckenwirt.at",
    telephone: "+43-6336-4842",
    photo: "",
    starRating: "4",
    priceRange: "€90 - €240",
    checkinTime: "14:00-19:00",
    checkoutTime: "10:00-13:00",
    petsAllowed: "true",
    numberOfRooms: 9,
    paymentAccepted: "Cash,Credit Card, Bankomat",
    latitude: 46.742481,
    longitude: 12.425066
    },
  openGraph: {
    title: "Moderne Ferienwohnungen direkt am Schigebiet Osttirol",
    description: "Moderne Appartements / Ferienwohnungen direkt am Schigebiet Sillian / Thurntaler für Ihren perfekten Urlaub in Osttirol; 2-6 Personen; sehr kinderfreundlich, großer Garten, 32m²- 85m²; hochwertige Ausstattung; Frühstücksbuffet im Haus, Cafe mit perfektem Cappucino im Erdgeschoß.",


  }

}


function getJsonLDById(id: number) {
  const object = JsonLD.find((item) => item.id === id);
  return object;
}


// Can be imported from a shared config
const locales = ['en', 'de','it'];
 
export default function LocaleLayout({children, params: {locale}}) {
  // Validate that the incoming `locale` parameter is valid
  const t = useTranslations('navigation');
  const myLocale =useTranslations.locale;
  const home = t('home');
  const apartmentTrans = t('appartment');
  const cafeTrans = t('cafe');
  const contactTrans = t('contact');
  const aboutTrans = t('about');
  

  if (!locales.includes(locale as any)) notFound();

/* NAVIGATION 
  <Navigation transparency={false} home ={home} appartment={apartmentTrans} cafe={cafeTrans} contact={contactTrans} about={aboutTrans} locale={locale} />

  Achtung 
  suppressHydrationWarning={true}
  *a* jsonLD nicht eingebunden
  
*/
 


  return (
    <html lang={locale}  >
      
      <body>
      <Suspense fallback ={<Loading/>}>
      <Navigation transparency={false} home ={home} appartment={apartmentTrans} cafe={cafeTrans} contact={contactTrans} about={aboutTrans} locale={locale} />

        {children}
        <Footer/>
        </Suspense>
      </body>
    </html>
  );
}