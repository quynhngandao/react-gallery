import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function GalleryForm({ postItems, postImage }) {
  const [newAlt, setNewAlt] = useState("");
  const [newPath, setNewPath] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("button clicked");

    const newItem = {
      alt: newAlt,
      path: newPath,
      description: newDescription,
    };

    postItems(newItem);

    if (newPath) {
      const fileInput = document.querySelector('input[type="file"]');
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append("alt", newAlt);
      formData.append("image", file);
      formData.append("description", newDescription);
      
      postImage(FormData);
    }
    setNewAlt("");
    setNewPath("");
    setNewDescription("");
  }

  function handleFileChange(e) {
    e.stopPropagation();
    e.preventDefault();

    const file = e.target.files[0];
    setNewPath(URL.createObjectURL(file));
  }

  return (
    <div className="form-container">
      <form
        action="/single"
        method="POST"
        encType="multipart/form-data"
        className="form"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={4} >
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
              onChange={handleFileChange}
            />
            {newPath && <img src={newPath} alt="Uploaded" style={{ maxWidth:'400px', maxHeight: '400px', marginTop: '20px'}}/>}
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
