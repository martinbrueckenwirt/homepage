import image from '../../data/image';
/*import UseTranslation from 'next-translate/useTranslation'; */


export default async function getImageToEnlarge(imageList,currentIndex) 
{
   
    const myFinalImage = imageList[currentIndex]
   
    let description = "";
 /*   const { t, lang } = UseTranslation('apartments')    */
    let lang = 'de' 

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
        enlargeImage:myFinalImage.full, 
        description : description,
        alt: myFinalImage.alt,
        copyright: "Brückenwirt Appartements",
        height: myFinalImage.height,
        width: myFinalImage.width,
        priority: myFinalImage.priority
    }

    return obj;
}