import getImageList from './getImageList';

let imageList:any[] = [];


export const preload = (id: string) => {
    // void evaluates the given expression and returns undefined
    // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
    imageList = getImageList(id).slice(0);
    console.log('preload imageList 1 id', id, imageList.length);
    void imageList;
  }

  export default async function ImageList({ id }: { id: string }) {
    console.log('preload imageList 2', id);
    const result = await getImageList(id);
    // ...
  }

  export const checkIsAvailable=() => {
    if (imageList.length > 0) 
    {
        return true;
    }
    else 
    {
        return false;
     }
    
  }