import React from "react";
import {useNavigate,useLocation} from 'react-router-dom';
import {Button,Dialog, DialogActions,DialogContent,DialogTitle,Typography} from '@mui/material';

const DeleteContact = (props) => {
    let navigate = useNavigate();
    const location=useLocation();
    const funcYes=()=>{
      props.getContactId(location.state.id);
        navigate('/');
    }
    const funcNo=()=>{
        navigate('/');
    }
  return(
    <Dialog 
    open={true}
    disableEscapeKeyDown={true}
    >
    <DialogTitle>
      <Typography variant="h5">Delete Confirmation</Typography>
    </DialogTitle>
    <DialogContent>
      <Typography variant="h6">
        Are you sure you want to delete this contact?
      </Typography>
      <Typography variant="subtitle2">
        You can't undo this operation
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button variant="contained" onClick={funcNo}>No</Button>
      <Button variant="contained" color="error" onClick={funcYes}>
        Yes
      </Button>
    </DialogActions>
  </Dialog>
  )
};

export default DeleteContact;