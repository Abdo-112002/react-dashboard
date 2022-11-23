

import React , {useState , useEffect, createContext} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import FormInputs from '../components/forms/FormInputs';
import Swal from 'sweetalert2';


export const dataContext = createContext({});

function UpdateProduct() {
    console.log("updateProduct");

    const [formData , setFormData] = useState({});
    const {productId} = useParams();
    const navigate = useNavigate();
    const url = `http://localhost:5000/products/${productId}`;

    function updateProduct(event) {
        event.preventDefault();
        let data = new FormData(event.target);
        let formObject = Object.fromEntries(data.entries())
        let img = URL.createObjectURL(formObject.mainImg);
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
        axios.put(url,{
          ...data
        }).then(({status , statusText})=> {
            console.log(status);
            console.log(statusText);
            if(status === 200 && statusText === "OK" ) {
              showNotification(status,statusText);
              navigate('/products');
            }
        }).catch((error)=> {
            showNotification(false,'error try again');
        });
  }


    useEffect(() => {
        axios.get(url).then((data)=> setFormData({...data}))
    },[]);

  return (
    <>
         <h2>Update Product</h2>
            <br/><hr/><br/>

            <dataContext.Provider value={formData}>
                 <FormInputs handelData={updateProduct} action='Update'/>
            </dataContext.Provider>

        
    </>
  )
}

export default UpdateProduct;
