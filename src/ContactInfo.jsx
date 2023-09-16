import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea,Box,Button,CardActions,Card} from '@mui/material';
import './ContactInfo.css';
import {useLocation,Link} from 'react-router-dom';

const ContactInfo=(props)=> {
    const location=useLocation();
    // const data=location.state;
    console.log(props);
  return (
    <Box className='ContactDetails'>
    <Card style={{marginTop:25,
    marginBottom:25}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image="https://fundforsharedinsight.org/wp-content/uploads/2020/10/generic-person.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" className='header'>  
            {location.state.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='description'>
          {location.state.email}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='description'>
          {location.state.numb}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    <Link to="/">
    <Button type= "submit" variant="contained" className='btn'>Back To Contact List</Button>
    </Link>
    </Box>
  );
}
export default ContactInfo;