import React, { useEffect, useState } from 'react'
import Second from './Second'

const First = () => {
    const [steps, setSteps] = useState (0)

    const handleCount = () => {
        const newStep = steps + 1
        setSteps(newStep)
        // console.log(steps)
    }
    
    useEffect (()=>{
        console.log('hello')
    },[steps])

  return (
    <div className='flex flex-col justify-center items-center py-10 space-y-4'>
         
        <h1 className='text-2xl'>I am first step: {steps} </h1>

        <button onClick={handleCount} className='border rounded-full px-4 bg-slate-300 hover:bg-opacity-50 duration-300'>Force</button>

        <Second send={steps}></Second>
    </div>
  )
}

export default First