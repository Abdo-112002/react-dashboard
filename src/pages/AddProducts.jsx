

import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'
import FormInputs from '../components/forms/FormInputs';


function AddProducts() {
  console.log("addProducts");

  const url = 'http://localhost:5000/products';
  const navigate = useNavigate();
  

  function handelSubmit(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let formObject = Object.fromEntries(data.entries())
    let img = URL.createObjectURL(formObject.mainImg);
    if(formObject.title !== "abdo"){
      showNotification(false,"title must be 'abdo'");
      return;
    }
    sendDataToServer({...formObject,mainImg : img});
  }

  function showNotification(status,statusText) {
        Swal.fire({
          position: 'top-end',
          icon: status ? 'success' : "error",
          title: statusText,
          showConfirmButton: false,
          timer: 2000
        })
  }

  function sendDataToServer(data) {
        axios.post(url,{
          ...data
        }).then(({status , statusText})=> {
            if(status === 201 && statusText === "Created" ) {
              showNotification(status,statusText);
              navigate('/products');
            }
        }).catch((error)=> {
            showNotification(false,'error try again');
        });
  }


  return (
        <>
            <h2>Add a new Product</h2>
            <br/><hr/><br/>


           <FormInputs handelData={handelSubmit} action='add'/>

        </>
  )
}

export default AddProducts
