


import {React , useContext , useState , useEffect} from 'react';
import { Button ,Form } from 'react-bootstrap';
import { dataContext } from '../../pages/UpdateProduct';

function FormInputs({handelData,action}) {
  console.log("formInput");

  const dataContextOnUpdate = useContext(dataContext);
  const [dataInputs , setDataInputs] = useState({
    title :  '' ,
    category: '',
    description: '',
    price: '',
    mainImg: ''
  });

  useEffect(() => {
    if(Object.keys(dataContextOnUpdate).length > 0) {
      setDataInputs({...dataContextOnUpdate.data})
    }
  },[dataContextOnUpdate]);


  function handelFormInputs(e) {
      let {name , value} = e.target;
      setDataInputs({...dataInputs , [name] : value});
  }


  return (
    <>
             <Form onSubmit={handelData} 
                style={{
                  width : "500px",
                  margin : "auto" ,
                  background : "#ddd" ,
                  padding : "20px",
                  borderRadius : "15px"
                }}
              >
                  <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control required type="text" name='title' onChange={handelFormInputs} value={dataInputs.title} placeholder="Name"  />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Product Category</Form.Label>
                    <Form.Control required type="text" name='category' onChange={handelFormInputs} value={dataInputs.category} placeholder="Category" />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control required type="text" name='description' onChange={handelFormInputs} value={dataInputs.description}  placeholder="Description" />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control required  type="number" name='price' onChange={handelFormInputs} value={dataInputs.price} placeholder="Price" />
                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Product Image</Form.Label> 
                    <Form.Control required type="file" name='mainImg' onChange={handelFormInputs}  placeholder="Choose an image" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                      {action}
                  </Button>
            </Form>
    </>
  )
}

export default FormInputs
