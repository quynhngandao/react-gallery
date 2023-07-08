import React from 'react';
import './App.css';
import Header from '../Header/Header';
import axios from "axios";
import { useState, useEffect } from "react";
import GalleryList from '../GalleryList/GalleryList'

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


    return (
      <div className="App">
        <Header/>
        <GalleryList galleryList={galleryList} updateLikes={updateLikes}/>
      </div>
    );
}

export default App;
