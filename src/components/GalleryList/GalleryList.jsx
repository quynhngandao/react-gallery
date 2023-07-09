import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, likes, updateLikes, deleteItem, postImage, getImage }) {
  return (
    <div className="gallery-container">
      {galleryList.map((item) => { return (
        <GalleryItem key={item.id} item={item} likes={likes} updateLikes={updateLikes} deleteItem={deleteItem} postImage={postImage} getImage={getImage}/>
      )})}
    </div>
  );
}

export default GalleryList;
