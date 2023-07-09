import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { ContactlessOutlined } from '@mui/icons-material';

function GalleryForm({ postItems }) {
  const [newAlt, setNewAlt] = useState('');
  const [newPath, setNewPath] = useState('');
  const [newDescription, setNewDescription] = useState('');
  
  const handleImageUpload = (file) => {

    const formData = new FormData();
    formData.append('image', file);

    axios.post('/gallery', formData)
      .then((response) => {
        setNewPath(`/images/${response.data.filePath}`);
        console.log(response.data.filePath, "filepath")
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log('button clicked');

    const newItem = {
        alt: newAlt,
        path: newPath,
        description: newDescription,
      };

    postItems(newItem);

    setNewAlt('');
    setNewPath('');
    setNewDescription('');
  }



  return (
    <div className="form-container">
      <form action="/single" method="POST" encType="multipart/form-data" className="form" onSubmit={handleSubmit}>
        <Grid container spacing={4} alignItems="flex-end">
          <Grid item xs={4}>
            <TextField
              className="name"
              label="Name"
              placeholder="Name of image"
              onChange={(e) => setNewAlt(e.target.value)}
              value={newAlt}
              fullWidth
            />
          </Grid>
          <Grid>
          <TextField
              className="path"
              label="URL"
              placeholder="Link to image"
              onChange={(e) => setNewPath(e.target.value)}
              value={newPath}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              className="description"
              label="Description"
              placeholder="Description of image"
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageUpload(e.target.files[0])}
            />
                   {newPath && <img src={newPath} alt="Uploaded" />}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default GalleryForm;
