/*https://react-photo-album.com/examples/lightbox*/

import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
/*import ReactGallery from '../../../components/reactGallery' */



/*import photos from "../../../../data/image"; */
const photos = [
  { src: "/P2535132-1.jpg", width: 800, height: 600 },
  { src: "/P2535145-1.jpg", width: 1600, height: 900 },
];





export default function Page() {
  const { t, lang } = useTranslation('apartments')

 const title =t('unsereAppartements')
    const anreisser = t('anreisser')
    
  return (
    <>
      <h1>{title}</h1>
      <p>{anreisser}</p>
     
   

      </>
      )
    }