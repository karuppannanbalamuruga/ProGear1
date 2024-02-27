import React from 'react'
import{ Col, Container, Row} from 'react-bootstrap' 

const SmartCar = () => {
  return (
    <section className='bg-dark white-color'>
        <Container>
            <Row className='justify-content-center align-items-center'>
                <Col lg={6}>
                    <div className='text-center my-5 py-3'>
                    <h6>What Is All-Inclusive</h6>
                    <h2>Smart Car Subscription?</h2>
                    <p>Pro Gear is India's first monthly car subscription service offering certified pre-owned cars for personal and business use in a flexible and affordable way.</p>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center'>
                <Col lg={7} className='pb-5'>
                    <Row className='p-4'>
                        <Col xs={6} lg={6}>
                            <Row>
                            <Col xs={4} lg={2}><img src={require('../assets/Frame1.png')}/></Col>
                            <Col xs={7} lg={7} className='p-2'><h6>Zero Down-Payment</h6></Col>
                            </Row>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Row>
                            <Col xs={4} lg={2}><img src={require('../assets/Frame2.png')}/></Col>
                            <Col xs={7} lg={7} className='p-2'><h6>flexible Tenure</h6></Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row  className='p-4'>
                        <Col xs={6} lg={6}>
                            <Row>
                            <Col xs={4} lg={2}><img src={require('../assets/Frame3.png')}/></Col>
                            <Col xs={7} lg={7} className='p-2'><h6>White Number Plate</h6></Col>
                            </Row>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Row>
                            <Col xs={4} lg={2}><img src={require('../assets/Frame4.png')}/></Col>
                            <Col xs={7} lg={7} className='p-2'><h6>B2B Insurance</h6></Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row  className='p-4'>
                        <Col xs={6} lg={6}>
                            <Row>
                            <Col xs={4} lg={2}><img src={require('../assets/Frame5.png')}/></Col>
                            <Col xs={7} lg={7} className='p-2'><h6>Service & Maintenance</h6></Col>
                            </Row>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Row>
                            <Col xs={4} lg={2}><img src={require('../assets/Frame6.png')}/></Col>
                            <Col xs={7} lg={7} className='p-2'><h6>24x7 RSA</h6></Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row  className='p-4'>
                        <Col xs={6} lg={6}>
                            <Row>
                            <Col xs={4} lg={2}><img src={require('../assets/Frame7.png')}/></Col>
                            <Col xs={7} lg={7} className='p-2'><h6>Tax Benefits</h6></Col>
                            </Row>
                        </Col>
                        <Col xs={6} lg={6}>
                            <Row>
                            <Col xs={4} lg={2}><img src={require('../assets/Frame8.png')}/></Col>
                            <Col xs={7} lg={7} className='p-2'><h6>Finance Support</h6></Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                
            </Row>
        </Container>
        
    </section>
  )
}

export default SmartCar
