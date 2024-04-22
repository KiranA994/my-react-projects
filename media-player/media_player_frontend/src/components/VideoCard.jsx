import React from 'react'
import Card from 'react-bootstrap/Card';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addToHistory, deleteUploadVideoApi } from '../services/allAPI';

function VideoCard({displayVideo, setdeleteVideoStatus, isPresent}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    let options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    let caption = displayVideo?.caption
    let url = displayVideo?.embedLink
    let time = new Date()
    let timestamp = new Intl.DateTimeFormat("en-GB",options).format(time)

    const reqBody = {
      caption,
      url,
      timestamp
    }

    const response = await addToHistory(reqBody)
    console.log(response);
  }

  const handleDelete = async(id) => {
    const response = await deleteUploadVideoApi(id)
    console.log(response);
    setdeleteVideoStatus(true)
  } 

  const videoDrag = (e,id) =>{
    console.log('inside videodrag function');
    console.log(`dragged card is: ${id}`);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <>
      <Card onClick={handleShow} style={{ width: '100%' }} className='mt-5' draggable onDragStart={(e)=> videoDrag(e,displayVideo?.id)}>
      {!isPresent &&
        <Card.Img  variant="top" src={displayVideo?.imageUrl}
        width={'100%'} height={'300px'} />
      }
      <Card.Body className='d-flex justify-content-between'>
        <Card.Text style={{color: 'purple'}}>{displayVideo?.caption}</Card.Text>
        {!isPresent &&
          <Button variant="danger" style={{backgroundColor:'red'}} onClick={() => handleDelete(displayVideo?.id)}>
          <FontAwesomeIcon icon={faTrash} style={{color: "#989efb",}} />
            </Button>
        }
        </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="487" src={`${displayVideo?.embedLink}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard