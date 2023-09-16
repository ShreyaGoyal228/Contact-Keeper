import React,{useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import './AppContact.css';
import {Box,TextField,Button,InputAdornment} from '@mui/material';

const AddContact=(props)=>{
  const[state,setState] = useState({name: "", email:"",numb:""});
  let navigate = useNavigate();
const submitForm=(e)=>{
  e.preventDefault();
        if(state.name=== "" || state.email===""||state.numb==="")
        {
        alert("Fields can't be empty");
        return;
        }
        else{
          console.log(state);
          props.addContactHandler(state);
          setState({name: "", email:"",numb:""});
          navigate("/");
        }
}
     return(
       <Box className='container'>
        <Box className='flexing'>
        <Box className='add'>Add Contact</Box>
        <Link to='/'>
        <Button variant="contained" className='btn'>Cancel</Button>
        </Link>
        </Box>
      <form onSubmit= {submitForm}>
      <label className='subheading' for='name'>Name:</label>
      <TextField variant="outlined" 
          placeholder="Enter your name" fullWidth 
          id="name" 
          className='field' type="text" required 
          value={state.name} 
          onChange={(e)=>{
            setState({...state, name :e.target.value});
          }}
        />
      <label className='subheading' for='mail'>Email:</label>
      <TextField variant="outlined" 
      placeholder="Enter your Email" fullWidth 
      id="mail" 
      className='field' 
      type="email" required 
      value={state.email} 
      onChange={(e)=>{
       setState({...state, email :e.target.value});
          }}/>
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
          maxLength: 10,
          startAdornment: <InputAdornment position="start">
              +91
          </InputAdornment>,
      }} 
        />
        <Button type= "submit" variant="contained" className='btn'>Add</Button>
    </form>

       </Box>
     )
}
export default AddContact;