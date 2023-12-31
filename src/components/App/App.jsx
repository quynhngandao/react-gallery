import React from "react";
import "./App.css";
import Header from "../Header/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList";
import GalleryForm from "../GalleryForm/GalleryForm";

function App() {
  // State
  const [galleryList, setGalleryList] = useState([]);

  // GET req to fetch item in gallery
  const getItems = () => {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        console.log("Response: ", response);
        console.log("Response.data: ", response.data);
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log("Error on GET: ", error);
      });
  };

  // useEffect to fetch gallery items on component mount, load once
  useEffect(() => {
    getItems();
  }, []);

  // POST req to add a new item in gallery
  const postItems = (newItem) => {
    axios({
      method: "POST",
      url: "/gallery",
      data: newItem,
    })
      .then((response) => {
        console.log("POST successful", response);
        getItems();
      })
      .catch((error) => {
        console.log("Error in POST", error);
      });
  };

  //POST req to upload an image
  const postImage = (formData) => {
    axios
      .post("/single", formData)
      .then((response) => {})
      .catch((error) => {
        // Handle any errors
        console.error("Error uploading image:", error);
      });
  };

  //  PUT req to update likes of item
  const updateLikes = (likesToUpdate) => {
    axios({
      method: "PUT",
      url: `/gallery/${likesToUpdate.id}`,
    })
      .then((response) => {
        console.log("Likes updated");
        getItems();
      })
      .catch((error) => {
        console.log("error updating likes", error);
      });
  };

  // DELETE req to delete item from gallery
  const deleteItem = (itemToDelete) => {
    axios({
      method: "DELETE",
      url: `/gallery/${itemToDelete.id}`,
    })
      .then((response) => {
        console.log("Deleted item", response);
        getItems();
      })
      .catch((error) => {
        console.log("Error Deleting item", error);
      });
  };
  
  return (
    <div className="App">
      <Header />
      <GalleryForm
        className="form"
        postItems={postItems}
        postImage={postImage}
      />
      <GalleryList
        className="list"
        galleryList={galleryList}
        updateLikes={updateLikes}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
