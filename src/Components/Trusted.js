import React,{useState}from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


const Trusted = () => {
    const [open, setOpen] = useState(false);
  return (
    <section className='pt-5 pb-5'>
        <div className='text-center'>
                <h6>100+ Trusted</h6>
                <h1>Corporate Partners</h1>
                </div>
        <Container>
            <Row className='justify-content-center align-items-center'>
                <Col xs={2} lg={1}>
                <Card className="bg-dark text-white">
                <Card.Img src={require('../assets/Trusted1.png')} alt="Card image" />
                </Card>
                </Col>
                <Col xs={2} lg={1}>
                <Card className="bg-dark text-white">
                <Card.Img src={require('../assets/Trusted2.png')} alt="Card image" />
                </Card>
                </Col>
                <Col xs={2} lg={1}>
                <Card className="bg-dark text-white">
                <Card.Img src={require('../assets/Trusted3.png')} alt="Card image" />
                </Card>
                </Col>
                <Col xs={2} lg={1}>
                <Card className="bg-dark text-white">
                <Card.Img src={require('../assets/Trusted4.png')} alt="Card image" />
                </Card>
                </Col>
                <Col xs={2} lg={1}>
                <Card className="bg-dark text-white">
                <Card.Img src={require('../assets/Trusted5.png')} alt="Card image" />
                </Card>
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center mt-5 shadow p-3 mb-5' style={{backgroundColor:'#F4F1BB',borderRadius:'10px'}}>
                <Col>
                <Row>
                    <Col xs={6} lg={3}>
                    <Image src={require('../assets/Trusted7.png')}/>
                    </Col>
                    <Col xs={6} lg={8}>
                    <div className='text-end pt-4'>
                        <h1>ProGear For Business</h1>
                        <p>Want more savings with added tax benefits? Get all-inclusive monthly car subscription as Company Cars or via Salary Sacrifice.</p>
                        <Button className='btn btn-dark rounded-pill' onClick={() => setOpen(!open)}aria-controls="example-collapse-text"aria-expanded={open}>Learn More</Button>
                        <Collapse in={open}>
                        <div id="example-collapse-text" className='text-start'>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.Want more savings with added tax benefits? Get all-inclusive monthly car subscription as Company Cars or via Salary Sacrifice.
                        </div>
                        </Collapse>
                    </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center'>
                <div className='text-center'>
                <h1>Read what our customer says</h1>
                </div>
            </Row>
            <Row >
                <Col lg={3}>
                    <div className='text-center p-3 shadow p-3 mb-5' style={{border:'1px solid rgb(213, 210, 205)',borderRadius:'5px'}}>
                    <h4>Samarth Chaturvedi</h4>
                    <h5 style={{color:'rgb(230, 167, 32)'}}><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></h5>
                    <p>Tooks car on lease for 6 months from Pro Gear,
                        around 3 weeks back, and till now the experience has 
                        been very smooth. The car was in good condition and 
                        the entire process was very smooth. I particularly want 
                        to mention Mr.Narpal, my point of contact,who was
                    </p>
                    </div>
                    
                </Col>
                <Col lg={3}>
                    <div className='text-center p-3 shadow p-3 mb-5' style={{border:'1px solid rgb(213, 210, 205)',borderRadius:'5px'}}>
                        <h4>Vaibhav Kaushal</h4>
                        <h5 style={{color:'rgb(230, 167, 32)'}}><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></h5>
                        <p>Awesome service provided by Pro Gear and Mr. Narpal. He was there to help on each and every detail and the entire process smooth. Car was delivered within 5 days of booking. Better pricing compared to competitors.</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className='text-center p-3 shadow p-3 mb-5' style={{border:'1px solid rgb(213, 210, 205)',borderRadius:'5px'}}>
                        <h4>Rhonen Gurung</h4>
                        <h5 style={{color:'rgb(230, 167, 32)'}}><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></h5>
                        <p>I have been using their rented car for about a month now. The car has not shown any signs of problems and was delivered to me in peak condition. I'm quite happy with it too. Narpal Singh was my point of contact with the company. He has been extremely helpful in guiding me in the process of leasing. His prompt response to any query that I had, showed a lot of professionalism and was quick to earn my trust.</p>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className='text-center p-3  shadow p-3 mb-5' style={{border:'1px solid rgb(213, 210, 205)',borderRadius:'5px'}}>
                        <h4>Rhonen Gurung</h4>
                        <h5 style={{color:'rgb(230, 167, 32)'}}><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"> </i><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i></h5>
                        <p>I have been using their rented car for about a month now. The car has not shown any signs of problems and was delivered to me in peak condition. I'm quite happy with it too. Narpal Singh was my point of contact with the company. He has been extremely helpful in guiding me in the process of leasing. His prompt response to any query that I had, showed a lot of professionalism and was quick to earn my trust.</p>
                    </div>
                </Col>
            </Row>
                
        </Container>
    </section>
  )
}

export default Trusted
