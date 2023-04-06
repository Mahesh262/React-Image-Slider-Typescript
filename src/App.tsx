import React from 'react';
import Carousel from './Carousel';

export type MyObject = {
  image:string;
}
const App = () => {

  const SlidesData :MyObject[]= [
    {image:'https://cdn.pixabay.com/photo/2023/03/21/09/53/willow-catkin-7866866_960_720.jpg'},
    {image:'https://cdn.pixabay.com/photo/2014/02/03/08/04/bee-257176_960_720.jpg'},
    {image:'https://cdn.pixabay.com/photo/2016/07/23/23/02/lavenders-1537694_960_720.jpg'},
    {image:'https://cdn.pixabay.com/photo/2022/03/08/02/15/beach-island-7054907_960_720.jpg'}
  ];
  return (
    <div>
      <h1>Carousel Example</h1>
      <Carousel myArray={SlidesData}/>
    </div>
  );
};

export default App;

