

import React , {useRef, useState , useEffect , memo} from 'react';

import { motion } from 'framer-motion';

import Images from '../Images';

function Slider() {
    let allImg = Images;
    console.log("slider");

    const slider = useRef();
    const [width , setWidth] = useState(0);


    // here i used useEffect to add my effect {after} html slider {render}
    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    },[]);

  return (
    <motion.div ref={slider} className='carousel w-100 overflow-hidden' style={{height : "60vh"}}>
        <motion.div drag='x' dragConstraints={{right : 0 , left : -width}} className='inner-carousel' style={{width:"100%",height:"100%", display : "flex"}}>
            {
                allImg?.map((item ,index)=> (
                    <motion.div
                     className='item' 
                     key={index}
                     style={{
                        width : "100% !important",
                        height : "100%",
                     }}
                     >
                            <img 
                            src={item}
                            alt='carousel-img'
                            style={{
                                width : "100%",
                                height : "100%",
                                pointerEvents : "none"
                            }}
                            />
                    </motion.div>
                ))
            }
        </motion.div>
    </motion.div>
  )
}

export default memo(Slider)
