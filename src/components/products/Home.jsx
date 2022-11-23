
import React , {useState,useEffect} from 'react'
import { Alert } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';




function Home() {
  console.log("home");

  const [show , setShow] = useState(true);

  useEffect(() => {
    let time = setTimeout(() => {
      setShow(false);
    }, 3000);
    
    return ()=>{
      clearTimeout(time);
    }
  },[])

  return (
    <div className='bg-light w-100 p-5'>
        {
          show&&(
            <Alert>
              welcome Abdulrahman
            </Alert>
          )
        }
        <Outlet/>
    </div>
  )
}

export default Home;
