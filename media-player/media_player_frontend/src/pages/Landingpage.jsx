import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
      <div className='row p-5 mt-5'>
        <div className="col-md-1"></div>
        <div className="col-md-5 p-3">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-4' style={{textAlign: 'justify'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti deserunt impedit reiciendis cumque eaque doloremque voluptatibus dolorem facilis consequatur placeat possimus amet, nobis totam maiores nulla corrupti. Iste, perferendis iure.
            Dolorem totam ullam officia repudiandae earum velit sunt sequi, minus laudantium eveniet cumque ad a minima labore odio facilis fugit modi incidunt.
          </p>
          <Link to={'/home'}>
            <button className='btn btn-warning mt-4'>
              Get Started
            </button>
          </Link>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 p-3 d-flex justify-content-center align-items-center">
          <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-q.cdn.bubble.io%2Ff1626105947235x994203823805915600%2FAdvanced-Audio-Player.gif?w=&h=&auto=compress&dpr=1&fit=max" 
          alt="" className='w-75' />
        </div>
      </div>

      <div className='mb-5 mt-5 py-5'>
      <h3 className='my-5 text-center'>Features</h3>
      <Row className='mb-5 mt-5 pt-0 pt-md-4'>
                <Col md={1}></Col>

        <Col md={3} className='p-5 p-md-0'>

        <Card style={{ width: '100%', backgroundColor:'rebeccapurple' }} className='p-4'>
      <Card.Img variant="top" src="https://i.gifer.com/ViPW.gif"
      style={{width:'100%', height: '300px'}} />
      <Card.Body>
        <Card.Title style={{color:'orange'}}>Managing Videos</Card.Title>
        <Card.Text style={{color:'orange'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
        </Col>

        <Col md={4} className='d-flex justify-content-center'>
        <Card style={{ width: '80%', backgroundColor:'rebeccapurple' }} className='p-4'>
      <Card.Img variant="top" src="https://i.gifer.com/DC2d.gif" 
      style={{width:'100%', height: '300px'}} />
      <Card.Body>
        <Card.Title style={{color:'orange'}}>Categorized Videos</Card.Title>
        <Card.Text style={{color:'orange'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
        </Col>

        <Col md={3} className='p-5 p-md-0'>
        <Card style={{ width: '100%', backgroundColor:'rebeccapurple' }} className='p-4'>
      <Card.Img variant="top" src="https://media1.tenor.com/m/lveDtTE8Ek8AAAAd/rainbow-swirls-relaxing.gif"
      style={{width:'100%', height: '300px'}}  />
      <Card.Body>
        <Card.Title style={{color:'orange'}}>Watch History</Card.Title>
        <Card.Text style={{color:'orange'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
        </Col>

        <Col md={1}></Col>

      </Row>
      </div>
      

<div className='pt-md-5 pb-5 row'>

<div className="col-md-1"></div>
<div className="col-md-10 border p-4 rounded border-2"
style={{backgroundColor:'orange'}}>
  <Row>
    <Col md={6} className='p-3'>
      <h2 className='mb-5' style={{color: 'rebeccapurple'}}>Simple Fast and Powerful</h2>
      <p style={{color: 'purple', textAlign:'justify'}}><span className='fs-4'>Lorem ipsum:</span> dolor sit amet consectetur adipisicing elit. Voluptatibus quod facilis eius ipsum aperiam ea sequi earum veniam aliquam nulla eaque adipisci, suscipit quam voluptatem libero porro dicta esse architecto!</p>
      <p style={{color: 'purple', textAlign:'justify'}} className='mt-3'><span className='fs-4'>Lorem ipsum:</span> dolor sit amet consectetur adipisicing elit. Voluptatibus quod facilis eius ipsum aperiam ea sequi earum veniam aliquam nulla eaque adipisci, suscipit quam voluptatem libero porro dicta esse architecto!</p>
      <p style={{color: 'purple', textAlign:'justify'}} className='mt-3'><span className='fs-4'>Lorem ipsum:</span> dolor sit amet consectetur adipisicing elit. Voluptatibus quod facilis eius ipsum aperiam ea sequi earum veniam aliquam nulla eaque adipisci, suscipit quam voluptatem libero porro dicta esse architecto!</p>
    </Col>
    <Col md={6}  className='p-3'>
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6G75yTBzBUA?si=9qC2wKS7KCjnLc2t" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
    </Col>
  </Row>
</div>
<div className="col-md-1"></div>

      </div>

    </>

  )
}

export default Landingpage