import React from 'react'
import Card from 'react-bootstrap/Card';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} style={{ width: '100%' }} className='mt-5'>
      <Card.Img variant="top" src="https://images.indianexpress.com/2024/04/Premalu-OTT-release-date-announce-Image_-Poster-of-Premalu-.jpg"
      width={'100%'} height={'300px'} />
      <Card.Body className='d-flex justify-content-between'>
        <Card.Text style={{color: 'purple'}}>Card Title</Card.Text>
        <Button variant="danger" style={{backgroundColor:'red'}} >
        <FontAwesomeIcon icon={faTrash} style={{color: "#989efb",}} />
          </Button>
        </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Marimayam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="487" src="https://www.youtube.com/embed/EBZViduKNE4?autoplay=1" title="Ep 737 | Marimayam | When a literary club is planning an event to celebrate its platinum jubilee" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard