import React from 'react';
import './App.css';
import Header from '../Header/Header';
import axios from "axios";
import { useState, useEffect } from "react";
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {
  const [galleryList, setGalleryList] = useState([]);
  const [newPath, setNewPath] = useState('');

  // GET 
  const getItems = () => {  
    axios({
      method: "GET", 
      url: '/gallery',
    }).then((response) => {
      console.log("Response: ", response);
        console.log("Response.data: ", response.data);
        setGalleryList(response.data);
    }).catch((error) => {
      console.log("Error on GET: ", error);
  })
}

 // GET 
 const getImage = () => {  
  axios({
    method: "GET", 
    url: '/single',
  }).then((response) => {
    console.log("Response: ", response);
      console.log("Response.data: ", response.data);
      setGalleryList(response.data);
  }).catch((error) => {
    console.log("Error on GET: ", error);
})
}

// useEffect
useEffect(() => {
  getItems();
  getImage()
}, [])

//POST 
const postItems = (newItem) => {
  axios({
    method: "POST",
    url: '/gallery',
    data: newItem
  }).then((response) => {
    console.log('POST successful', response)
    getItems()
  }).catch((error) => {
    console.log('Error in POST', error)
  })
}

//POST 
const postImage = (file) => {
  const formData = new FormData();
  formData.append('image', file);

  axios.post('/gallery', formData)
    .then((response) => {
      getItems
      // Handle the response (e.g., update the newPath state with the file path)
      setNewPath(response.data.filePath);
    })
    .catch((error) => {
      // Handle any errors
      console.error('Error uploading image:', error);
    });
};


  // PUT
  const updateLikes = (likesToUpdate) => {
    axios({
      method:'PUT',
      url: `/gallery/${likesToUpdate.id}`
    }).then((response) => {
      console.log('Likes updated');
      getItems()
    }).catch((error)=> {
      console.log('error updating likes', error)
    })
  }

// DELETE 
const deleteItem = (itemToDelete) => {
  axios({
    method:"DELETE",
    url: `/gallery/${itemToDelete.id}`
  }).then((response) => {
    console.log('Deleted item', response);
    getItems();
    }).catch((error) => {
      console.log('Error Deleting item', error)
    })
}
    return (
      <div className="App">
        <Header/>
        <GalleryForm className="form" postItems={postItems} postImage={postImage}/>
        <GalleryList className="list" galleryList={galleryList} updateLikes={updateLikes} deleteItem={deleteItem}/>
      </div>
    );
}

export default App;
