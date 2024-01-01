import image from '../../data/image';
/*import UseTranslation from 'next-translate/useTranslation'; */


export default async function getImageToEnlarge(imageList:any,index:any) 
{
   
   console.log("getImageToEnlarge ",index, "imageList ", imageList)
    const myFinalImage = imageList[index]
  

    var obj ={
        enlargeImage:myFinalImage.full, 
        description : myFinalImage.description,
        descriptionEn: myFinalImage.descriptionEn,
        descriptionIt:myFinalImage.descriptionIt,
        alt: myFinalImage.alt,
        altEN:myFinalImage.altEN,
        altIT:myFinalImage.altIT,
        copyright: "Brückenwirt Appartements",
        priority: myFinalImage.priority
    }



    return obj;
}