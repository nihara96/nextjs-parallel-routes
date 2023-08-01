import React from 'react'

const Right = async () => {

    await new Promise((resolve)=> setTimeout(resolve,4000));

    const value = Math.random(); 

  return (
    <div className='bg-red-400 h-screen'>Right: {value}</div>
  )
}

export default Right;