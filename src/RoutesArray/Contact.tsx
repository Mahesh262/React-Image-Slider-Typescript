import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    
    <Link to={"/Contact/ContactForm"}>
      ContactForm
    </Link>
    <Link to={'/Contact/Details'}>
      Details
    </Link>
    
    <Outlet/>
    
    </>
  )
}

export default Contact