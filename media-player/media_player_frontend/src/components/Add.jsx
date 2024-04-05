import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoApi } from '../services/allAPI';


function Add() {
    const [show, setShow] = useState(false);
    const [video, setVideo] = useState({
      caption: '',
      imageUrl: '',
      embedLink: ''
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getEmbedLink = (e) =>{
      const text = e.target.value;
      if(text.startsWith('https://youtu.be/')){
        const link = `https://www.youtube.com/embed/${text.slice(17,28)}`
        setVideo({...video,embedLink:link})
      }
      else{
        const link = `https://www.youtube.com/embed/${text.slice(-11)}`
        setVideo({...video,embedLink:link})
      }
    }

    const handleUpload = async() => {
      const {caption,imageUrl,embedLink} = video
      if(!caption || !imageUrl || !embedLink){
        // toast.info('please fill the form completely')

      }
      else{
        const response = await uploadVideoApi(video)
        console.log(response);
        // toast.success('proceed')
      }
     }


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
                <input type="text" className='form-control' placeholder='Enter the Caption'
                onChange={(e)=>setVideo({...video,caption:e.target.value})} />
            </div>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Enter the Image Url' 
                onChange={(e)=>setVideo({...video,imageUrl:e.target.value})}/>
            </div>
            <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Enter the Youtube Video Link' 
                onChange={(e)=>getEmbedLink(e)}/>
            </div>
        </form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="warning" onClick={handleUpload} style={{backgroundColor: 'orange', color: 'rebeccapurple'}}>
        Upload
      </Button>
    </Modal.Footer>
    </Modal>

    <ToastContainer theme='colored' position='top-right' autoClose={2000} />
</>

  )
}

export default Add