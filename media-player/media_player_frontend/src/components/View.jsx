import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllCategoryApi, getUploadVideoApi, updateCategoryApi } from '../services/allAPI'


function View({videoUploadStatus,setdragOutVideoStatus}) {

  // state to hold the videos from backend
  const [video, setVideo] = useState([])

  // state to pass data from videocard to video(child to parent) using state lifting


  const [deleteVideoStatus,setdeleteVideoStatus] = useState(false)

  const getVideo = async() => {
    const response = await getUploadVideoApi()
    setVideo(response.data)

  }

  // empty array is passed will run getVideo() only on the first render
  useEffect(()=> {
    getVideo()
    setdeleteVideoStatus(false)
  },[videoUploadStatus,deleteVideoStatus])

  const DragOver = (e)=> {
    e.preventDefault()
  
  }

  const videoDrop = async(e) => {
    const {categoryId, videoId} = JSON.parse(e.dataTransfer.getData("sharedData"))  
    console.log(categoryId, videoId);

    // To get all category from backend

    const {data} = await getAllCategoryApi()
    console.log(data);

    // To get category which have the same category id
    let selectedCategory = data.find((item)=> item.id == categoryId)
    let result = selectedCategory.allVideos.filter((item)=> item.id != videoId)
    let reqBody = {
      category: selectedCategory.category,
      allVideos: result,
      id: categoryId
    }
    //  update the category at backend
    await updateCategoryApi(categoryId,reqBody)
    setdragOutVideoStatus(true)
  }
  
  return (
    <>
    {/* checking the length of video array and applying the column equal to length of video array */}
    <Row droppable="true" onDragOver={(e)=>DragOver(e)} onDrop={(e)=> videoDrop(e)}>
  
    { 
    
    video?.length > 0 ?
      video?.map((item)=>(
        <Col sm={12} md={6} lg={4} xl={3}>
          {/* sharing item through props with displayVideo as key */}
        <VideoCard displayVideo={item} setdeleteVideoStatus={setdeleteVideoStatus}/>
        </Col>
      ))
    :
    <h5 className='mt-5 text-success'>No Video Uploaded Yet....</h5>

    }

        </Row>
    </>
  )
}

export default View