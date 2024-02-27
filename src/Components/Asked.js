import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';

const Asked = () => {
  return (
    <section style={{background: '#E6E6E6'}} className='pt-5'>
        <div className='text-center pt-4 pb-4'>
            <h1>Frequently Asked Questions</h1>
        </div>
        <Container>
        <Row className='justify-content-center align-items-center pb-4'>
            <Col lg={11}>
                <Row className='justify-content-center align-items-center'>
                    <Col lg={1} className='text-center'><p>Subscription</p></Col>
                    <Col lg={1} className='text-center'><p>Booking</p></Col>
                    <Col lg={1} className='text-center'><p>Payment</p></Col>
                    <Col lg={1} className='text-center'><p>Maintenance</p></Col>
                    <Col lg={1} className='text-center'><p>Insurance</p></Col>
                    <Col lg={1} className='text-center'><p>Breakdown</p></Col>
                    <Col lg={1} className='text-center'><p>Legal</p></Col>
                    <Col lg={1} className='text-center'><p>Extension</p></Col>
                    <Col lg={1} className='text-center'><p>Foreclosure</p></Col>
                    <Col lg={1} className='text-center'><p>Guidelines</p></Col>
                </Row>
            </Col>
        </Row>
        <Row className='pb-3'>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header><h6>What is Pro Gear Car Lease/Subscription Program?</h6></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Row>

        <Row className='pb-3'>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header><h6>What are the benefits of the Pro Gear Car Subscription Program?</h6></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Row>

        <Row className='pb-3'>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header><h6>For how long can I subscribe to a car?</h6></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Row>

        <Row className='pb-3'>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header><h6>Is  there a KMs limit to how much I can drive?</h6></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Row>

        <Row className='pb-3'>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header><h6>How is Pro Gear Subscription different from Car Rental or Self Drive Services?</h6></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Row>

        <Row className='pb-5'>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header><h6>What are the services included in the Pro Gear Subscription Program?</h6></Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Row>
        </Container>
        
    </section>
  )
}

export default Asked
