import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {Box} from '@mui/material';
 import {useNavigate} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ContactCard=(props)=>{
    let navigate = useNavigate();
    let contactId = props.contact.id;

    const handleClick=()=>{
        navigate(`/contactInfo/${contactId}`,{state:props.contact});
    }
    return(<>
        <Box className="item">
        <Box className="first">
        <AccountCircleIcon className='profile'/>
     <Box className="content" onClick={handleClick}>
        <Box className='name'>{props.contact.name}</Box>
        <Box className='mail'>{props.contact.email}</Box>
        <Box className='number'>{props.contact.numb}</Box>
     </Box>
     </Box>
      <Box className='second'>
      <EditNoteIcon className='update' 
      onClick={()=>{
       navigate(`/update/${contactId}`,{state:props.contact});
      }}/>
     <DeleteIcon className='bin' onClick={()=>{
        navigate('/delete',{state:props.contact});
     }}/>
     </Box>
     </Box>
     </>
    );
}
export default ContactCard;
