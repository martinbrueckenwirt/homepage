
import image from '../../data/image';
import UseTranslation from 'next-translate/useTranslation';


export default async function getImageToEnlarge(enlargeImage,type) 
{
   
    const myImageList = image.find(elem => elem.id ===type)
    const myFinalImage = myImageList.images.find(img => img.full ===enlargeImage)
    let index = myImageList.images.indexOf(myFinalImage)
    let description = "";
    const { t, lang } = UseTranslation('apartments')    

    switch (lang){
        case 'it':
            description = myFinalImage.descriptionIt;
            break;
        case 'en':
            description = myFinalImage.descriptionEn;
            break;
        default: description = myFinalImage.description;
    }
    



    var obj ={
        enlargeImage:enlargeImage, 
        index: index,
        description : description,
        alt: myFinalImage.alt,
        copyright: "Brückenwirt Appartements",
        height: myFinalImage.height,
        width: myFinalImage.width,
        priority: myFinalImage.priority
    }

    return obj;
}
