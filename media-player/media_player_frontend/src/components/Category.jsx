import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { Row, Col } from 'react-bootstrap';

function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5 mt-md-0'>
      <button onClick={handleShow} className='w-100 btn btn-warning' style={{backgroundColor:'orange', color:"rebeccapurple"}}>Add New Category</button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon className='text-warning' icon={faPen} />Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='my-3 border rounded p-4'>
            <label htmlFor='cname' className='mb-3'>Category Name</label>
            <input type="text" id='cname' placeholder='Enter Category Name' className='form-control' />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" style={{backgroundColor:'orange'}} onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
    </Modal>

    <div className='border border-secondary w-100 p-3 rounded mt-5'>
      
      <div className='d-flex justify-content-between align-items-center'>
      <p>Hindi Songs</p>
      <Button className='btn-btn-danger' style={{backgroundColor:'red'}} >
      <FontAwesomeIcon icon={faTrash} style={{color: "#989efb"}} />
      </Button>
      </div>  
      <Row>
      <Col sm={12}>
        <VideoCard />
      </Col>  
      </Row> 
    </div>

    <p className='text-warning mt-5'>No Category Added yet</p>

    </>
  )
}

export default Category