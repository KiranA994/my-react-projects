import { faArrowLeft, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { deleteVideoHistoryApi, getAllVideoHistoryApi } from '../services/allAPI'
import { Link } from 'react-router-dom'


function Watchhistory() {

  const [deleteHistoryVideoStatus,setdeleteHistoryVideoStatus] = useState(false)

  const [videoHistory,setVideoHistory] = useState([])

  // function to get all video from backend
  const getAllVideo = async() => {
    const response  = await getAllVideoHistoryApi()
    setVideoHistory(response.data)
  }
  
  useEffect(()=>{
    getAllVideo()
    setdeleteHistoryVideoStatus(false)
  },[deleteHistoryVideoStatus])

  // function to delete a particular video watch history
  const deleteVideo = async(id) => {
    const response = await deleteVideoHistoryApi(id)
    setdeleteHistoryVideoStatus(true)
    console.log(response);
  } 

  return (
    <>
    <div className="d-flex align-items-center mx-4 mb-5 mt-5">
      <h4>Watch History</h4>
      <Link to={'/home'} className='ms-auto' style={{textDecoration:'none'}}>
      <h5 className='ms-auto'
      >
        <FontAwesomeIcon icon={faArrowLeft} className='me-2' />
      <span id="back" className='me-3'>Back Home</span>
      <FontAwesomeIcon className='ms-2' icon={faHouse} />
      </h5>
      </Link>

    </div>

    <div className="row mx-4 mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10 p-4" style={{overflowX:'auto'}}>
        
          {videoHistory?.length > 0?
          <table className='table'>
                      <thead>
            <tr>
              <th style={{backgroundColor:'lightgrey'}}>#</th>
              <th style={{backgroundColor:'lightgrey'}}>Caption</th>
              <th style={{backgroundColor:'lightgrey'}}>URL</th>
              <th style={{backgroundColor:'lightgrey'}}>Timestamp</th>
              <th style={{backgroundColor:'lightgrey'}}>Action</th>
            </tr>
          </thead>
          <tbody>
          {videoHistory?.map((item,index) => (
          <tr>
          <td style={{backgroundColor:'lightgrey'}}>{index+1}</td>
          <td style={{backgroundColor:'lightgrey'}}>{item?.caption}</td>
          <td style={{backgroundColor:'lightgrey'}}><a href={item?.url} target='_blank'>{item?.url}</a></td>
          <td style={{backgroundColor:'lightgrey'}}>{item?.timestamp}</td>
          <td style={{backgroundColor:'lightgrey'}}>
          <FontAwesomeIcon icon={faTrash} className='btn btn-outline-danger' 
          style={{marginTop:'-10px'}} onClick={() => deleteVideo(item?.id)}/>
          </td>
          </tr>
          ))}
           
          </tbody>
        </table>:
        <p className='text-warning mt-5 fs-5'>Watch History is clean</p>
      }
        </div>
      <div className="col-md-1"></div>
    </div>
    </>
  )
}

export default Watchhistory