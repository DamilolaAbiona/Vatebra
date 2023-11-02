import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <div> 
        <h2>404, Page Not Found.</h2>
        <h5>Go Back to <span><Link to='/'>Home</Link></span></h5>
    </div>
  )
}

export default NotFound