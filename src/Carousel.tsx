import { useState,useEffect } from 'react';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import { MyObject } from './App';
import './App.css'
type CarouselProps = {
  myArray:MyObject[];
}

const Carousel = ({ myArray }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDone, setSlideDone] = useState<boolean>(true);
  const [timeID, setTimeID] = useState<NodeJS.Timeout| null>(null);

   useEffect(()=>{
     if(slideDone){
       setSlideDone(false);
      setTimeID(

      setTimeout(()=>{
        goToNextSlide();
        setSlideDone(true)
      },5000)  
      )
     }
   },[slideDone])

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? myArray.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === myArray.length - 1 ? 0 : currentSlide + 1);
  };
  const AutoPlayStop = () => {

    if (timeID !== null) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };
  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div className="slider">
      <div className="carousel__slides"
       onMouseEnter={AutoPlayStop}
       onMouseLeave={AutoPlayStart}
      >
        {myArray.map((li, index) => {
          return (
          
          <div key={index} className={index === currentSlide ? 'slide active':'slide'}>
            {index === currentSlide &&  <img src={li.image} alt={`${index}`} className='image' /> }
           
          </div>
)})}
      </div>
      < FaArrowAltCircleLeft style={{top:"50%",fontSize:"25px",width:"10%", position:"absolute", right:"30%",zIndex:"10",userSelect:'none'}}onClick={goToPreviousSlide}/>
      <FaArrowAltCircleRight className="carousel__button carousel__button--next" style={{top:"50%", fontSize:"25px",width:"10%", position:"absolute", left:"30%", zIndex:"10",userSelect:"none"}} onClick={goToNextSlide}/>
      <div className="container__slider__links" style={{zIndex:"10"}}>
        {myArray.map((item, index) => {
          return (
            <button
              key={index}
              className={
                currentSlide === index
                  ? "container__slider__links-small container__slider__links-small-active"
                  : "container__slider__links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setCurrentSlide(index);
              }}
            ></button>
          );
        })}
      </div>
 
    </div>
  );
};

export default Carousel;

// import React, { useState } from "react";

// const Carousel = () => {
//   const [value, setValue] = useState("");

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const regex = /^[0-9]*3?[0-9]*$/; // regex to allow only numbers and the digit 3
//     const inputValue = event.target.value;

//     if (regex.test(inputValue)) {
//       setValue(inputValue);
//     }
//   };
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{

//     e.preventDefault()
//      console.log(value)
     
//   }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//     <input type="text" maxLength={3} value={value} onChange={handleChange} />
//     <button type="submit">Submit</button>
//     </form>
    
//     </>
    
//   );
// };
// export default Carousel