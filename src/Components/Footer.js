import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'

const Footer = () => {
  return (
    <section className='pt-5'>
        <Container>
            <Row>
                <Col lg={3}>
                    <Row>
                        <Col xs={2} lg={2}><img src={require('../assets/Footer.png')}/></Col>
                        <Col xs={8} lg={10}><h4 className='fw-bold'>pro gear</h4></Col>
                    </Row>
                    
                    <p className='pt-3'>Pro Gear is a flexible,affordable and convenient
                        solution for car ownership
                    </p>
                    <p className='pt-4'><i class="bi bi-telephone-fill"></i> +91 81780 50450</p>
                    <p><i class="bi bi-envelope-open-fill"></i> Support@progear.com</p>
                   <Row className='pb-5'>
                   <Col xs={1} lg={1}><i class="bi bi-facebook"></i></Col>
                    <Col xs={1} lg={1}><i class="bi bi-instagram"></i></Col>
                    <Col xs={1} lg={1}><i class="bi bi-linkedin"></i></Col>
                    <Col xs={1} lg={1}><i class="bi bi-twitter"></i></Col>
                   </Row>
                     
                </Col>

                <Col lg={3}>
                    <h5 className='fw-bold'>GET IN TOUCH</h5>
                    <Row className='pt-4 pb-4'>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Retail FAQs</p>
                        <p>Corporate FAQs</p>
                        <p>Blog</p>
                    </Row>
                </Col>

                <Col lg={3}>
                    <h5 className='fw-bold'>CAR SUBSCRIPTION</h5>
                    <Row className='pt-4 pb-4'>
                        <p>Delhi NCR</p>
                        <p>Bangalore</p>
                        <p>Hyderabad</p>
                    </Row>
                </Col>

                <Col lg={3}>
                    <h5 className='fw-bold'>USEFUL LINKS</h5>
                    <Row className='pt-4 pb-4'>
                        <p>Browse Cars</p>
                        <p>Corporate Lease</p>
                        <p>Privacy Policy</p>
                        <p>Terms &condition</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer
