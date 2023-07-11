import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import HandleCount from "../HandleCount/HandleCount";
import "./GalleryItem.css";
import { useState } from "react";

function GalleryItem(props) {
  const [showCard, setShowCard] = useState(false);

  const handleShowCard = () => {
    setShowCard(!showCard);
  };

  let description;
  if (!showCard) {
    description = 
      <CardActionArea onClick={handleShowCard}>
        <CardMedia
          component="img"
          height="250"
          image={props.item.path}
          alt={props.item.alt}
        />
         <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'capitalize', letterSpacing:2, variant:"body1", color:"#0F66D0", fontWeight:'bold'}} >
            {props.item.alt}
          </Typography>
        </CardContent>
      </CardActionArea>
  } else {
    description = 
      <CardActionArea onClick={handleShowCard}>
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'capitalize', letterSpacing:2, variant:"body1", color:"#0F66D0", fontWeight:'bold'}} >
            {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
  }

  return (
    <Card className="card" sx={{ maxWidth: 400 }}>
      {description}
      <CardActions className="content-btn">
        <HandleCount
          likes={props.likes}
          updateLikes={props.updateLikes}
          item={props.item}
        />
      </CardActions>
    </Card>
  );
}

export default GalleryItem;

/* FOR TOGGLE FUNCTIONALITY */
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, CardActions } from '@mui/material';
// import HandleCount from '../HandleCount/HandleCount';
// import HandleDelete from '../HandleDelete/HandleDelete';
// import './GalleryItem.css'
// import Collapse from '@mui/material/Collapse';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import { useState } from 'react';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// function GalleryItem(props) {
// const [expanded, setExpanded] = useState(false);

// const handleExpandClick = () => {
//   setExpanded(!expanded);
//   };

//   return (
//     <Card className="card" sx={{ maxWidth: 500, boxShadow: 10,
//       bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
//       color: (theme) =>
//         theme.palette.mode === 'dark' ? 'grey.200' : 'grey.500',
//       p: 2,
//       m: 2,
//       borderRadius: 3,}}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="300"
//           image={props.item.path}
//           alt={props.item.alt}
//         />
//           <CardContent>
//          <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//        <ExpandMoreIcon />
//         </ExpandMore>

//         <Collapse  onClick={handleExpandClick} in={expanded} timeout="auto" unmountOnExit>
//           <Typography  sx={{ textTransform: 'capitalize', letterSpacing:2, variant:"body1", color:"#0F66D0", fontWeight:'bold'}} >
//             {props.item.description}
//           </Typography>
//           </Collapse>

//         </CardContent>

//       </CardActionArea>
//       <CardActions className='content-btn' sx={{justifyContent:"space-evenly"}}>
//         <HandleCount likes={props.likes} updateLikes={props.updateLikes} item={props.item} />
//         <HandleDelete deleteItem={props.deleteItem} item={props.item} />
//       </CardActions>
//     </Card>
//   );
// }

// export default GalleryItem;
