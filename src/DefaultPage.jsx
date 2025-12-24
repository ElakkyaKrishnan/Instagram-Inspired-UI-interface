import React from 'react'
import { Link } from 'react-router-dom'


function DefaultPage() {
  return (
    <>
    

    <div className="text-center my-5">

        <h4>This page is not avilable!Try visiting </h4>
        

        <Link to='/profile' className="text-decoration-none pe-5">profile</Link>
        <Link to='/story/1/4' className="text-decoration-none">Story</Link>
        </div>

   
    </>
  )
}

export default DefaultPage