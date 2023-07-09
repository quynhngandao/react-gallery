import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Grid}  from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function GalleryForm({ postItems }) {
  // hook
  const [newAlt, setNewAlt] = useState('');
  const [newPath, setNewPath] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // handleSubmit
  function handleSubmit(e) {
    e.preventDefault();

    console.log('button clicked');

    postItems({
      alt: newAlt,
      path: newPath,
      description: newDescription,
    });
    // clear input fields
    setNewAlt('');
    setNewPath('');
    setNewDescription('');
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
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
          <Grid item xs={4}>
            <TextField
              className="url"
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
