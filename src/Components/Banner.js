import React,{useState} from 'react'
import{Container,Row} from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Collection from './Collection';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';


const Banner = () => {
  const [show, setShow] = useState(false);
  return (
      <section>
        <Container fluid>
          <Row>
            <Image src={require('../assets/car.png')} fluid/>
            <Card.ImgOverlay  className='d-flex d-absolute align-items-center justify-content-center'>
              <div className='text-center'>
              <h3 style={{fontSize:'35px'}} className='d-none d-md-block'>The smart way to</h3>
              <h1 style={{fontSize:'80px'}} className='d-none d-md-block'>OWN A CAR</h1>
              <p className='d-none d-md-block'>All - inclusive Car Subscription</p>
              <Nav.Link href="#" className='p-2 btn bg-dark d-none d-md-block' style={{borderRadius:'36px',color:'white',width:'10rem',marginLeft:'9rem'}} onClick={()=>setShow(!show)}>Browse cars</Nav.Link>
              <Offcanvas show={show}  onHide={()=>setShow(!show)} placement={'start'}>
              <Offcanvas.Header closeButton>
              <Offcanvas.Title><h1 className='align-items-center justify-content-center text-center'>Pro Gear</h1></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Collection/>
              </Offcanvas.Body>
              </Offcanvas>
              </div>
            </Card.ImgOverlay>
          </Row>
        </Container>
        
        
        
        
      </section>
         
  )
}

export default Banner
