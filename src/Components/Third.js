import React from 'react'

const Third = (props) => {
  return (
    <div className='flex flex-col justify-center items-center py-10'>
        <h1 >I am third step: <span className='text-orange-600 text-xl'>{props.sender}</span></h1>
    </div>
  )
}

export default Third