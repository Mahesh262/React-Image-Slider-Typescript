import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    Home
   <div> 
   <Link to={'/About'}>
        About
        </Link>
    </div> 
    <div>
    <Link to='/Contact'>
        Contact
        </Link>
    </div>
       

    
    </>
  )
}

export default Home