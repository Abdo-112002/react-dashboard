

import {React ,useEffect, useState } from 'react';
import { Alert, Button, Table } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

function AllProducts() {
  console.log("allProducts");

  const [products,setProducts] = useState([]);
  const [alert , setAlert] = useState(0);
  const [limit , setLimit] = useState(4);
  let url = `http://localhost:5000/products`;
  const navigate = useNavigate();

  // get data from api after first render
  useEffect(() => {
    getAllProduct();
  },[limit]);


  function confirmAlert(product,status){
      Swal.fire({
        title : `You Are Sure To Delete ${product.title} ?`,
        icon: status ?  "success" : "error",
        showCancelButton: true,
    }).then(({isConfirmed})=> {
        if(isConfirmed) {
          deleteProduct(product.id);
        }
    });
  }

  
  function deleteProduct(productId) {
        fetch(`${url}/${productId}`,{
          method : "DELETE",
        })
        .then((res)=> {
          res.json();
          setAlert(res.status);
        })
        .then(()=> getAllProduct());
  }

  useEffect(() => {
    let time;
    if(alert) {
      time = setTimeout(() => {
        setAlert(0);
      }, 1500)
    }
    
    return()=> {
      clearTimeout(time);
    }

  },[alert]);


  function getAllProduct() {
    fetch(`${url}?_limit=${limit}`)
    .then((res)=> res.json())
    .then((data)=> setProducts(data));
  }

  function loadMore() {
    if(products.length >= 12){
      return;
    }
    setLimit(limit+1);
  }


  return (
        <>
            <h1>All Products..</h1>
            <br/>
            {
              (alert) ? (
                <Alert variant="success">
                      Deleted Success
                </Alert>
              ) : ""
            }
            <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>Control</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        (products.length !== 0)
                        ? products?.map((item,index)=> (
                            <tr key={index}>
                              <td>{item.id}</td>
                              <td>{item.title}</td>
                              <td>{item.price}</td>
                              <td>{item.description.slice(0,55)}...</td>
                              <td>
                                <Button onClick={()=>confirmAlert(item,false)} variant="danger">Delete</Button>
                                <Button onClick={()=> navigate(`update/${item.id}`)} variant="success" className='mx-3'>Update</Button>
                                <Button onClick={()=> navigate(`details/${item.id}`)} variant="primary">Details</Button>
                              </td>
                            </tr>
                        ))
                        : <tr><td colSpan={5}><h2>you has no any products</h2></td></tr>
                      }
                  </tbody>
            </Table>

            {
              (products.length >= limit ) &&(
                <Button 
                  onClick={loadMore} 
                  disabled={(limit  >= 12) ? true : false} >
                  load more
                </Button>
              )
            }
        </>
  )
}

export default AllProducts;
