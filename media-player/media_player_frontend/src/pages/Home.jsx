import React from 'react'
import Add from '../components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  return (
   <>
      <div className='my-5 container d-flex '>
          <Add/>
          <h5 className='ms-auto'>Watch History<FontAwesomeIcon icon={faClockRotateLeft} className='ms-2' /></h5>
          
      </div>

      <div className="row mt-5 p-4">
        <div className="col-md-9">
          <h4>All Videos</h4>
          <View/>
        </div>
        <div className="col-md-3 px-4">
          <Category/>
        </div>
      </div>
   </>
  )
}

export default Home