import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import HandleCount from '../HandleCount/HandleCount';
import HandleDelete from '../HandleDelete/HandleDelete';
import './GalleryItem.css'

function GalleryItem(props) {
  return (
    <Card className="card" sx={{ maxWidth: 500, boxShadow: 10,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
      color: (theme) =>
        theme.palette.mode === 'dark' ? 'grey.200' : 'grey.500',
      p: 2,
      m: 2,
      borderRadius: 3,}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.item.path}
          alt={props.item.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.name}
          </Typography>
          <Typography  sx={{ textTransform: 'capitalize', letterSpacing:2, variant:"body1", color:"#0F66D0", fontWeight:'bold'}} >
            {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='content-btn' sx={{justifyContent:"space-evenly"}}>
        <HandleCount likes={props.likes} updateLikes={props.updateLikes} item={props.item} />
        <HandleDelete deleteItem={props.deleteItem} item={props.item} />
      </CardActions>
    </Card>
  );
}

export default GalleryItem;
