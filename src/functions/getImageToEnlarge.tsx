import image from '../../data/image';
/*import UseTranslation from 'next-translate/useTranslation'; */


export default async function getImageToEnlarge(clickedImage:any,imageList:any) 
{
   
   console.log("getImageToEnlarge ",clickedImage, "imageList ", imageList)
   /* const myFinalImage = imageList[index]*/
   
   const myFinalImage  = imageList.filter(function (el) {
    return el.full === clickedImage;
}) as GalleryImage[];
  

    var obj ={
        enlargeImage:myFinalImage[0].full, 
        description : myFinalImage[0].description,
        descriptionEn: myFinalImage[0].descriptionEn,
        descriptionIt:myFinalImage[0].descriptionIt,
        alt: myFinalImage[0].alt,
        altEN:myFinalImage[0].altEN,
        altIT:myFinalImage[0].altIT,
        copyright: "Brückenwirt Appartements",
        priority: myFinalImage.priority
    }

    console.log("getImageToEnlarge ",obj);

    return obj;
}