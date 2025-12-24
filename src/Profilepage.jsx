import React from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'

function Profilepage() {
  return (
    <>
     <div className="d-flex vh-100">
        <div className="w-20"><Sidebar/></div>
        <div className="w-75"><Profile/></div>
     </div>
    </>
  )
}

export default Profilepage