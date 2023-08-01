import React from 'react'

const Demo = async () => {

    await new Promise((resolve)=> setTimeout(resolve,4000));

    const value = Math.random(); 

  return (
    <div className='bg-black h-screen text-white'>Main: {value}</div>
  )
}

export default Demo;