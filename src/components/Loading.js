import React from 'react'
import LoadingGif from '../assets/data.svg'

function Loading() {
  return (
    <div className='w-100 text-center mt-5 py-3' style={{minHeight: '80vh'}}>
        <img className='col-8 col-md-6 col-lg-5 col-xl-3 my-2' src={LoadingGif} alt='Loading'/>
        <p className='my-3 fs-5'>Loading...</p>
    </div>
  )
}

export default Loading