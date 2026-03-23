import React, { useContext } from 'react'
import Nav from '../../Navbar/Nav'
import "./Root.css"
import { AppContext } from '../../Context/AppContext'


function Root() {
    const contextInfo = useContext(AppContext);
  return (
    <div className='Root-Container'>
        <Nav />
        {contextInfo.Loading? <h1 className='Root-Heading'>Loading Please Wait...</h1>: <h1 className='Root-Heading'>Nothing To Show, Please Search Something</h1>}
      
    </div>
  )
}

export default Root
