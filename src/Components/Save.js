import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

const Save = () => {
  return (
    <section style={{backgroundColor:'#C7C7c7'}} className='pb-5'>
        <Container fluid>
        <Row className='justify-content-center align-items-center'>
                <Col lg={5}>
                    <div className='text-center my-5 py-3'>
                    <h6>Save Money With</h6>
                    <h2 style={{fontWeight:'bold'}}>ProGear Subscription</h2>
                    <p>Subscribing to a car is not just flexible and convenient, it might also save your money as compared to buying a car on loan</p>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center' >
                <Col lg={8} >
                    <Table striped style={{borderRadius:'10px'}}>
                        <thead >
                            <tr>
                                <th className='bg-dark'></th>
                                <th className='bg-dark text-center'style={{color:'white'}}>Pro Gear Subscription</th>
                                <th className='bg-dark text-center'style={{color:'white'}}>Buy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Zero Down Payment & Road Tax</th>
                                <th className='text-center'style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>No Financing Process</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>Cheaper than EMI</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>Annual Insurance Included</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>Free Car Service & Maintenance</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>Free 24x7 All India Road Side Assistance</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>End to End Warranty</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>Annual Insurance Included</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>Hassle Free Insurance Claims</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>Stress Free Car Maintenance</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>Wide Range of PPP Certified Cars to Choose</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>Flexible Tenure & Easy Extension Process</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>No Dealer Visit at Time of Purchase/Sale</th>
                                <th className='text-center' style={{color:'green'}}><i class="bi bi-check-lg"></i></th>
                                <th className='text-center' style={{color:'red'}}><i class="bi bi-x-lg"></i></th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Save
