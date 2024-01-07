import imageList from "../../data/image";
import { GalleryImage } from "../../types/GalleryImage";


export default function getImageList(type: string): GalleryImage[] {
    let filteredList: GalleryImage[] = [];
    let sortedImagesList: GalleryImage[] = [];
   
    filteredList = imageList.filter(function (el) {
        return el.id === type;
    }) as GalleryImage[];

    if (filteredList.length === 0) {
        console.log('getImagelist FEHLER - falscher Typ :', type);
        return console.error();
    }

    sortedImagesList = filteredList[0].images;
    sortedImagesList.sort((a, b) => a.sortnumber - b.sortnumber);

    return sortedImagesList as GalleryImage[];
}