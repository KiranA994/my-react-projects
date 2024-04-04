import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'


function View() {
  return (
    <>
    <Row></Row>
    <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard/>
    </Col>
    <h5 className='mt-5 text-success'>No Video Uploaded Yet....</h5>
    </>
  )
}

export default View