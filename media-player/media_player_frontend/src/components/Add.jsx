import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from 'react-bootstrap';


function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

<>
        <div>
            <h5>Upload New Video<FontAwesomeIcon icon={faCloudArrowUp} className='ms-2' onClick={handleShow} /></h5>
        </div>
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>
      <FontAwesomeIcon icon={faFilm} className='me-2 text-success'/>
        Upload Videos
    </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <p>Fill the Following Details</p>
        <form className='mt-3 rounded border p-2'>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Enter the Caption' />
            </div>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Enter the Image Url' />
            </div>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Enter the Youtube Video Link' />
            </div>
        </form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="warning" onClick={handleClose} style={{backgroundColor: 'orange', color: 'rebeccapurple'}}>
        Upload
      </Button>
    </Modal.Footer>
    </Modal>
</>

  )
}

export default Add