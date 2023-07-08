import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import HandleCount from '../HandleCount/HandleCount';
import './GalleryItem.css'

function GalleryItem(props) {
  return (
    <Card className="card" sx={{ maxWidth: 400}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={props.item.path}
          alt={props.item.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='content-btn'>
        <HandleCount likes={props.likes} updateLikes={props.updateLikes} item={props.item} />
      </CardActions>
    </Card>
  );
}

export default GalleryItem;
