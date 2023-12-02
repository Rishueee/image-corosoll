import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const Carousel = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
      if(count < 2){
        setCount(count + 1);
      }  
    }
    const dec = () => {
      if(count > 0){
        setCount(count - 1);
      }
    }
  
    return (
      <div className="cont">
            <div onClick={dec} className="backward">
                <ArrowBackIosIcon/>
            </div>
            
            <div className="textontop">
                {images[count].title}    
            </div>

            <img src={images[count].img} alt=""  className="images"/>

            <div className="textss">
                {images[count].subtitle}
            </div>

            <div onClick={inc} className="frontbut">
                <ArrowForwardIosIcon/>
            </div>
        </div>
      )
    }
  
 export default Carousel;