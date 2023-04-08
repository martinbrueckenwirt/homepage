import Image from 'next/image';
import image from '../../data/image'
import styles from '../components/galleryViewer.module.css'
import useTranslation from 'next-translate/useTranslation'



const GalleryViewer = (props) => {
	var imageToEnlarge = props.enlargeImage;
    var type = props.type;
    let description ='';
    let alt = '';
    let copyright = '';
    let height = '';
    let width = '';
    /*let index = 0; */
    const { t, lang } = useTranslation('apartments')
    
    
function getImageToEnlarge() {
    const myImageList = image.find(elem => elem.id ===type)
    const myFinalImage = myImageList.images.find(img => img.full ===imageToEnlarge)
    let index = myImageList.images.indexOf(myFinalImage)

    switch (lang){
        case 'it':
            description = myFinalImage.descriptionIt;
            break;
        case 'en':
            description = myFinalImage.descriptionEn;
            break;
        default: description = myFinalImage.description;
    }
    
    alt = myFinalImage.alt;
    copyright = myFinalImage.copyright;
    height = myFinalImage.height;
    width = myFinalImage.width

}

getImageToEnlarge();


    
return(
    <div>im GalleryViewr</div>

);

};

export default GalleryViewer;