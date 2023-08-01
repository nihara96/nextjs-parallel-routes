import React from 'react'

const Left = async () => {

    await new Promise((resolve)=> setTimeout(resolve,4000));

    const value = Math.random(); 

  return (
    <div className='bg-blue-400 flex justify-center items-center h-screen text-3xl'>Left: {value}</div>
  )
}

export default Left;