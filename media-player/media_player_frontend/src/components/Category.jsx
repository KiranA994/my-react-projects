import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { Row, Col } from 'react-bootstrap';
import { addCategoryApi, deleteCategoryApi, getAVideoApi, getAllCategoryApi, updateCategoryApi } from '../services/allAPI';
// react toaster imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category({dragOutVideoStatus,setdragOutVideoStatus}) {

  const [show, setShow] = useState(false);
  const [categoryName, setcategoryName] = useState("")
  const [allCategory, setallCategory] = useState([])
  const [addCategoryStatus, setaddCategoryStatus] = useState(false)
  const [deleteACategory, setdeleteACategory] = useState(false)


  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
  }

  //  function to add category
  const handleAddCategory = async() => {
    let reqBody = {
      category:categoryName,
      allVideos:[]
    }

    if(allCategory.length == 0){
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if(result.status >= 200 && result.status < 300){
        toast.success('Category added successfully')
        setcategoryName('')
        setaddCategoryStatus(true)
        handleClose()
      }
      else{
        toast.error('Something Went Wrong')
      }  
    }
    else{
      const existingCategory = allCategory.find(item => item.category.toLowerCase() == categoryName.toLowerCase())
      if(existingCategory){
        toast.warning('Category already exists')
        setcategoryName('')
        handleClose()
      }
      else{
        const result = await addCategoryApi(reqBody)
      console.log(result);
      if(result.status >= 200 && result.status < 300){
        toast.success('Category added successfully')
        setcategoryName('')
        setaddCategoryStatus(true)
        handleClose()
      }
      else{
        toast.error('Something Went Wrong')
      } 
      }
    }
    
  }

  // function to get all category
  const getAllCategory = async() => {
    const result = await getAllCategoryApi()
    setallCategory(result.data)
  }

  useEffect(()=> {
    getAllCategory()
    setdeleteACategory(false)
    setaddCategoryStatus(false)
    setdragOutVideoStatus(false)
  },[addCategoryStatus,deleteACategory,dragOutVideoStatus])

  //  function to delete a category

  const deleteCategory = async(id) => {
    const response = await deleteCategoryApi(id)
    if(response.status >= 200 && response.status < 300){
      setdeleteACategory(true)
    }
    else{
      toast.error('something went wrong')
    }
    console.log(response);
  }

    // function to prevent data loss
    const dragOver = (e) => {
      // avoid refresh using e.preventDefault()
      e.preventDefault()  
    } 
    
    const videoDrop = async(e,categoryId) => {
      console.log('inside drop function');
      console.log(`category id is: ${categoryId}`);
      const videoId = e.dataTransfer.getData('videoId')
      console.log(videoId);

      // api to get the details of video that is dragged
      const {data} = await getAVideoApi(videoId)
      console.log(data);


      const selectedCategory = allCategory.find(item=> item.id == categoryId)
      if(selectedCategory.allVideos.find(item => item.id == data.id)){
        toast.error('video already exist')
      }
      else{
        selectedCategory.allVideos.push(data)
      }

      await updateCategoryApi(categoryId, selectedCategory)

      getAllCategory()
    }

    // function to send the details of card to view 
    const dragStart = (e,categoryId, videoId) => {
      console.log(categoryId);
      console.log(videoId);
      let sharedData = {
        categoryId,
        videoId
      }
      e.dataTransfer.setData('sharedData',JSON.stringify(sharedData))
    }

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
            <input type="text" id='cname' placeholder='Enter Category Name' 
            onChange={(e)=>setcategoryName(e.target.value)} className='form-control' />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" style={{backgroundColor:'orange'}} onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
    </Modal>

    { 
    allCategory?.length > 0 ?
    allCategory?.map((item)=> (
      <div className='border border-secondary w-100 p-3 rounded mt-5' droppable="true"
      onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
        
      <div className='d-flex justify-content-between align-items-center'>
      <p>{item?.category}</p>
      <Button className='btn-btn-danger' style={{backgroundColor:'red'}} 
      onClick={() => deleteCategory(item?.id)}>
      <FontAwesomeIcon icon={faTrash} style={{color: "#989efb"}} />
      </Button>
      </div>  
      <Row>
  { item.allVideos.length > 0 ?
  item.allVideos.map((card)=> (
    <Col sm={12} draggable onDragStart={(e)=>dragStart(e,item.id,card.id)}>
    <VideoCard displayVideo={card} isPresent={true} />
    </Col>  
  ))
        : 
        null
}
      </Row> 
    </div>
    ))

:
    <p className='text-warning mt-5'>No Category Added yet</p>

    }
      
    
    <ToastContainer theme='colored' position='top-right' autoClose={2000} />
    </>
  )
}

export default Category