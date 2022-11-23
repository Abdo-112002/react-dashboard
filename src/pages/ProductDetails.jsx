

import React , {useState , useEffect}from 'react';
import { Button, Card } from 'react-bootstrap';
import {useNavigate , useParams} from 'react-router-dom';


function ProductDetails() {

    console.log("ProductDetails");

    const [item , setItem ] = useState({});
    const navigate = useNavigate();
    const {productId} = useParams();
    const url = `http://localhost:5000/products/${productId}`;

    useEffect(() => {
      fetch(url)
      .then((res)=> res.json())
      .then((data)=> setItem(data));
    },[]);

  return (
    <div>
        <h2>ProductDetails...</h2>
        <br/>
        <Button onClick={()=> navigate(-1)}>Go Back</Button>
        <hr/><br/>

        <Card >
        <div>
            <Card.Img 
                variant="top" 
                src={item.mainImg}
                style={{
                    width : "40%",
                    height : "500px",
                    marginRight :"20px",
                }}
            />
        </div>
        <Card.Body>
            <Card.Header>{item.category}</Card.Header>
            <br/>
            <Card.Title>{item.title}</Card.Title>
            <Card.Title>Price : {item.price}</Card.Title>
            <Card.Text>
                {item.description}
            </Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
}

export default ProductDetails;
