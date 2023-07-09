import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import FavoriteIcon from "@mui/icons-material/Favorite";
import './HandleCount.css'

 function notificationsLabel(count) {
  if (count >=0) {
    return count;
  }
  }

function HandleCount(props) {

 const handleUpdateLikes = () => {
  props.updateLikes({
    id: props.item.id
  })
  console.log(props.item.id)
 }

  return (
    <IconButton  onClick={handleUpdateLikes} size="small" color="primary" aria-label={notificationsLabel(props.item.likes)}>
      <Badge badgeContent={props.item.likes} color="secondary">
      <FavoriteIcon />
      </Badge>
      <p className='text'>{props.item.likes} likes </p>
    </IconButton>
  );
}

export default HandleCount;



