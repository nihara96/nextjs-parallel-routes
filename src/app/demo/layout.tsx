import React from 'react'

const Layout = (props:{
    children:React.ReactNode; 
    left:React.ReactNode; 
    right:React.ReactNode; 
}) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
        {props.children}
        {props.left} 
        {props.right}
    </div>
  )
}

export default Layout;