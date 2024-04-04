import { faArrowLeft, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Watchhistory() {
  return (
    <>
    <div className="d-flex align-items-center mx-4 mb-5 mt-5">
      <h4>Watch History</h4>
      <h5 className='ms-auto'
      ><FontAwesomeIcon icon={faArrowLeft} className='me-2' /><span id="back" className='me-3'>Back Home</span><FontAwesomeIcon className='ms-2' icon={faHouse} /></h5>
    </div>

    <div className="row mx-4 mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10 p-4" style={{overflowX:'auto'}}>
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
            <tr>
              <td style={{backgroundColor:'lightgrey'}}>1</td>
              <td style={{backgroundColor:'lightgrey'}}>1</td>
              <td style={{backgroundColor:'lightgrey'}}>1</td>
              <td style={{backgroundColor:'lightgrey'}}>1</td>
              <td style={{backgroundColor:'lightgrey'}}>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-1"></div>
    </div>
    </>
  )
}

export default Watchhistory