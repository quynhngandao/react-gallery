import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function HandleDelete(props) {
  const handleDelete = () => {
    props.deleteItem({
      id: props.item.id,
    });
    console.log(props.item.id);
  };

  return (
    <IconButton onClick={handleDelete} sx={{ fontSize: "large", color: "red" }}>
      <DeleteForeverIcon />
      Delete
    </IconButton>
  );
}

export default HandleDelete;
