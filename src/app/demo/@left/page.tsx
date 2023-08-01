import React from 'react'

const Left = async () => {

    await new Promise((resolve)=> setTimeout(resolve,4000));

    const value = Math.random(); 

  return (
    <div className='bg-blue-400 h-screen'>Left: {value}</div>
  )
}

export default Left;