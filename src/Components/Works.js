import React from 'react'
import{ Col, Container, Row} from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

const Works = () => {
  return (
    <Container fluid>
        <Row>
        <Col lg={7}>
            <Row className='px-5 pt-5 pb-5'>
            <h1 style={{fontSize:'40px',fontWeight:'bold'}}>How Pro Gear Works</h1>
            <p>Subscribe to a car in India in just 3 simple steps and become a proud owner</p>
            </Row>

            <Row className='px-5 pb-4'>
            <Col lg={1} className='pt-3'>
            <Image src={require('../assets/Works1.png')}/>
            </Col>
            <Col lang={11} className='px-4'>
            <h4>Find the right car</h4>
            <p>Choose from a wide range of PPP Assured cars with 300+ quality checks</p>
            </Col>
            
            </Row>
            <Row className='px-5 pb-4'>
            <Col lg={1} className='p-2'>
            <Image src={require('../assets/Works2.png')}/>
            </Col>
            <Col lg={11} className='px-4'>
            <h4>Get online approval</h4>
            <p>Submit your documents & get online eligibility approval</p>
            </Col>
            </Row>

            <Row className='px-5'>
            <Col lg={1} className='p-2'>
            <Image src={require('../assets/Works3.png')}/>
            </Col>
            <Col lg={11} className='px-4'>
            <h4>Drive worry free</h4>
            <p>Simply drive and enjoy the experience, just like you own it</p>
            </Col>
            </Row>
        </Col>
        
        <Col lg={5}>
          <Image src={require('../assets/car2.png')} fluid={true}/>
        </Col>
      
    </Row>
    </Container>
    
  )
}

export default Works
