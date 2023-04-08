import imageList from "../../data/image";


export default function getImageList(type) {

let filteredList = [];
var sortedImagesList =[];

filteredList = imageList.filter(function (el) {
    return el.id === type 
    });

if (filteredList.length === 0) {
console.log('getImagelist FEHLER - falscher Typ :', type);
return console.error();
}
/*datenstruktur enthält verschachtelte Arrays, dh Reduktion auf 1 Array */
sortedImagesList = filteredList[0].images;
sortedImagesList.sort((a,b) => a.sortnumber - b.sortnumber)

return sortedImagesList;
}