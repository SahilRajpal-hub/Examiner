import React from 'react'
import {
  NavDropdown,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Carousel,
} from 'react-bootstrap'

const LandingScreen = () => {
  return (
    <div>
      <Navbar bg='light' expand='lg' sticky='top'>
        <Navbar.Brand href='#home'>Examiner</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>About Us</Nav.Link>
            <NavDropdown title='Contact Us' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.ctfassets.net/hrltx12pl8hq/1XAMCcfZRbFQmNCuFR8oXH/e1bddb571332e355b076109938db0bf3/shutterstock_1308690499.jpg?fit=fill&w=800&h=400'
            alt='First slide'
          />
          <Carousel.Caption>
            <Button variant='outline-info' href='/login'>
              {' '}
              Login{' '}
            </Button>{' '}
            <Button variant='outline-info' href='/register'>
              {' '}
              SignUp{' '}
            </Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.ctfassets.net/hrltx12pl8hq/1XAMCcfZRbFQmNCuFR8oXH/e1bddb571332e355b076109938db0bf3/shutterstock_1308690499.jpg?fit=fill&w=800&h=400'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.ctfassets.net/hrltx12pl8hq/1XAMCcfZRbFQmNCuFR8oXH/e1bddb571332e355b076109938db0bf3/shutterstock_1308690499.jpg?fit=fill&w=800&h=400'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default LandingScreen
