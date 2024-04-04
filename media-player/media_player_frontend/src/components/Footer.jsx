import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <div className='row p-5 mt-md-5'>
      <div className="col-md-4">
        <h4 className='mb-3'>
        <FontAwesomeIcon icon={faVideo} className='text-warning me-3' />
          Media Player
        </h4>
        <p style={{textAlign: 'justify'}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquid iste soluta debitis odit repellat, voluptates delectus ex at pariatur aspernatur, tenetur saepe similique, ad voluptas! Provident voluptas harum assumenda?
        </p>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2">
        <h4>Links</h4>
        <Link to={'/'} className='mt-3'><p>Landing Page</p></Link>
        <Link to={'/home'}><p>Home Page</p></Link>
        <Link to ={'/history'}><p>Watch History Page</p></Link>
      </div>
      <div className="col-md-2">
      <h4>Guides</h4>
        <p className='mt-3'>React</p>
        <p>React Bootstrap</p>
        <p>Bootswatch</p>
      </div>
      <div className="col-md-3">
        <h3>Contact</h3>
        <div className='d-flex mt-3'>
          <input type="text" placeholder='Email ID' className='form-control'/>
          <button className='btn btn-warning ms-3' style={{color:'white', backgroundColor:'orange'}}>Subscribe</button>
        </div>
        <div className='d-flex justify-content-between mt-3'>
        <FontAwesomeIcon icon={faInstagram} size='2xl'/>
        <FontAwesomeIcon icon={faFacebook} size='2xl'/>
        <FontAwesomeIcon icon={faTwitter} size='2xl'/>
        <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
        </div>
      </div>

    </div>
  )
}

export default Footer