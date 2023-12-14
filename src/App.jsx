import React,{useState,useEffect} from 'react';
import api from './api/contacts';
import {Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactInfo from './ContactInfo';
import EditContact from './EditContact';
import './App.css';
 import DeleteContact from './DeleteContact';

const App=()=>{
  const[searchResults,setSearchResults]=useState([]);
  const[searchTerm,setSearchTerm]=useState("");
  const[contacts,setContacts]=useState([]);
  // const LOCAL_STORAGE_KEY='contacts';

//  Retrieving the contacts

 const retrieveContacts=async()=>{
   const response = await api.get('/contacts');
   return response.data;
 }
//  Adding the Contacts

  const addContactHandler=async(contact)=>{
    const response=await api.post('/contacts',{id:uuidv4(),...contact});  
    // setContacts([{id: uuidv4(), ...contact},...contacts]);
    setContacts([...contacts,response.data]);
    console.log(contact);
  }
//Updating the Contacts

const updateContactHandler=async(contact)=>{
    const response =await api.put(`/contacts/${contact.id}`,contact);
    console.log(response.data);
    setContacts(
      contacts.map((cont)=>{
         if(cont.id===contact.id)
         {
         return {...response.data};
         }
         else{
          return cont;
         }
      })
    );
  };
// Removing the Contacts

const removeContactHandler=async(id)=>{
await api.delete(`/contacts/${id}`)    
const newContactList=contacts.filter((contact)=>{ 
        return contact.id!==id;
});
setContacts(newContactList);
};
//Searching the Contacts

const searchHandler=(searchTerm)=>{
setSearchTerm(searchTerm);
if(searchTerm!=="")
   {
    const newContactList=contacts.filter((contact)=>{
           return (Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase()));
    });
    setSearchResults(newContactList);
   }
   else{
    setSearchResults(contacts);
   }
} 
//Get the contacts from JSON server on refreshing the page
useEffect(()=>{
  //   const getContacts=JSON.parse(localStorage.getItem('contacts')); 
  //   if(getContacts!=null)
  //  setContacts(getContacts);
   const getAllContacts=async()=>{
     const allContacts=await retrieveContacts();
     if(allContacts)
     setContacts(allContacts);
   }
   getAllContacts();
    },[]);
// Update the contacts in local Storage every time contacs array gets updated
// useEffect(()=>{
//   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));  //localStorage.setItem(keyname,value)
//   },[contacts]);

  return ( 
  <>
  <Header/>
  <Routes>
    <Route path="/add" exact element={<AddContact addContactHandler={addContactHandler}/>}/> 
    <Route path="/" exact element={<ContactList contact={searchTerm.length >0 ? searchResults:contacts} 
    term={searchTerm} searchKeyword={searchHandler}/>}/>
    <Route path='/contactInfo/:id' exact element={<ContactInfo contact={contacts}/>}/>
    <Route exact path='/update/:id' element={<EditContact updateContactHandler={updateContactHandler}/>}/>
    <Route path='/delete' element={<DeleteContact getContactId={removeContactHandler}/>}/>
  </Routes>  
 </>
  );
}
export default App ;
