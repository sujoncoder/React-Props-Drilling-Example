import React from 'react'
import Third from './Third'

const Second = (props) => {
  return (
   <div className='flex flex-col justify-center items-center py-10'>

        <h1>I am Second step: <span className='text-xl text-indigo-700'>{props.send}</span></h1>

        <Third sender={props.send}></Third>
    </div>
  )
}

export default Second