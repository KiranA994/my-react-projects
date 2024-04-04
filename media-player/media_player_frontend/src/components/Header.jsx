import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Header() {
  return (

        <Navbar className="bg-transparent border border-secondary">
        <Container>
        <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand className='text-success fs-4'>
            <FontAwesomeIcon icon={faVideo} className='text-warning me-3' size='xl' beat/>{' '}
              Media Player
            </Navbar.Brand>
        </Link>
        </Container>
      </Navbar>
  )
}

export default Header