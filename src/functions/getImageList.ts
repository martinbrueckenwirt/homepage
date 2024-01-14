import imageList from "../../data/image";
import { GalleryImage } from '../app/[locale]/components/types';


export default function getImageList(type: string): GalleryImage[] {
    let filteredList: { images: GalleryImage[] }[] = [];
    let sortedImagesList: GalleryImage[] = [];
   
    filteredList = imageList.filter(function (el) {
        return el.id === type;
    }) as unknown as { images: GalleryImage[] }[];

    if (filteredList.length === 0) {
        console.log('getImagelist FEHLER - falscher Typ :', type);
        return [];
    }

    sortedImagesList = filteredList[0].images;
    sortedImagesList.sort((a, b) => a.sortnumber - b.sortnumber);

    return sortedImagesList as GalleryImage[];
}