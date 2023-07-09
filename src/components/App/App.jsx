import React from 'react';
import './App.css';
import Header from '../Header/Header';
import axios from "axios";
import { useState, useEffect } from "react";
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm';
import { get } from 'jquery';

function App() {
  const [galleryList, setGalleryList] = useState([]);

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
      alert('Error in GET')
  })
}

// useEffect
useEffect(() => {
  getItems();
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
    alert('Error in POST')
  })
}

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
      alert('Error updating in PUT')
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
      alert('Error in deleting in DELETE')
    })
}
    return (
      <div className="App">
        <Header/>
        <GalleryForm className="form" postItems={postItems}/>
        <GalleryList className="list" galleryList={galleryList} updateLikes={updateLikes} deleteItem={deleteItem}/>
      </div>
    );
}

export default App;
