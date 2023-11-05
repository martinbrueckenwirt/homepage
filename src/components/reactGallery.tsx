import PhotoAlbum from "react-photo-album";

/*import photos from "../../../../data/image"; */
const photos = [
    { src: "/P2535132-1.jpg", width: 800, height: 600 },
    { src: "/P2535145-1.jpg", width: 1600, height: 900 },
  ];

  export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}