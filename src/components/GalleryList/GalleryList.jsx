import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, likes, updateLikes }) {
  return (
    <ul>
      {galleryList.map((item) => { return (
        <GalleryItem key={item.id} item={item} likes={likes} updateLikes={updateLikes}/>
      )})}
    </ul>
  );
}

export default GalleryList;
