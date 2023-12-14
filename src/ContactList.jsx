import React from 'react';
import './ContactList.css';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import {Box,Button,IconButton,TextField} from '@mui/material';
import ContactCard from './ContactCard';

const ContactList=(props)=>{     
    // console.log(props);
    // const deleteContactHandler=(id)=>{
    //           props.getContactId(id);
    // }      
    // gettingId={deleteContactHandler}
    const renderContactInfo=props.contact.map((contact)=>{
        return( 
        <ContactCard contact={contact}  key={contact.id}/>
        ); 
    });
    const noMatches =()=>{
    return(
           <Box className='not-found'>
            No matches availbale
           </Box>
    );
    }
    const getSearchTerm=(e)=>{
       props.searchKeyword(e.target.value);
    }
    return(
        <Box className='container'>
            <div className='contactHeading'>
                <div>Contact List</div>
                <Link to='/add'>
                <Button  variant="contained" className='btn'>Add Contact</Button>
                </Link>
                </div>
                <TextField id="outlined-basic" 
                placeholder='Search Contacts' 
                fullWidth 
                className='search' 
                variant="outlined"
                value={props.term}
                onChange={getSearchTerm}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
                /> 
            {renderContactInfo.length>0 ? renderContactInfo: noMatches()}
            </Box>
    )
}
export default ContactList;