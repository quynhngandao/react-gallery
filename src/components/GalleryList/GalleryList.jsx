import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, likes, updateLikes }) {
  return (
    <div className="gallery-container">
      {galleryList.map((item) => { return (
        <GalleryItem key={item.id} item={item} likes={likes} updateLikes={updateLikes}/>
      )})}
    </div>
  );
}

export default GalleryList;
