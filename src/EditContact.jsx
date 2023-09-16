import React,{useState} from 'react';
import {useNavigate,Link,useLocation} from 'react-router-dom';
import './AppContact.css';
import {Box,TextField,Button,InputAdornment} from '@mui/material';

const EditContact=(props)=>{
  let navigate = useNavigate();
  let location=useLocation();
  const[state,setState] = 
  useState({name: `${location.state.name}`, email:`${location.state.email}`,numb:`${location.state.numb}` ,id:`${location.state.id}`});
const submitForm=(e)=>{
  e.preventDefault();
        if(state.name=== "" || state.email===""||state.num==="")
        {
        alert("Fields can't be empty");
        return;
        }
        else{
          console.log(state);
          props.updateContactHandler(state);
          setState({name: "", email:"",numb:""});
          navigate("/");
        }
}
     return(
       <Box className='container'>
        <Box className='flexing'>
        <Box className='add'>Update Contact</Box>
        <Link to='/'>
        <Button variant="contained" className='btn'>Cancel</Button>
        </Link>
        </Box>
      <form onSubmit= {submitForm}>
      <label className='subheading' htmlFor='name'>Name:</label>
      <TextField variant="outlined" fullWidth id="name" className='field' type="text" required value={state.name}
      onChange={(e)=>{
            setState({...state, name :e.target.value});
          }}
        />
      <label className='subheading' htmlFor='mail'>Email:</label>
      <TextField variant="outlined" fullWidth id="mail" className='field' type="email" required value={state.email} onChange={(e)=>{
            setState({...state, email :e.target.value});
          }}
        />
        <label className='subheading' for='numb'>Phone no:</label>
        <TextField variant="outlined" 
       type='number'
       placeholder="Enter your Phone number" fullWidth
       id="numb" className='field' 
       value={state.numb} 
       onChange={(e)=>{
           setState({...state, numb :e.target.value});
        }}   
         InputProps={{
          startAdornment: <InputAdornment position="start">
              +91
          </InputAdornment>,
      }} 
        />
        <Button type= "submit" variant="contained" className='btn'>Update</Button>
    </form>

       </Box>
     )
}
export default EditContact;