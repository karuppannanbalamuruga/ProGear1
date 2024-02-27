import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Browers = () => {
  return (
    <section>
    <div className="d-flex justify-content-center align-items-center pb-3">
        <img src={require('../assets/Footer.png')}/>
        <h2> ProGear</h2>   
    </div>
    <div className="d-flex justify-content-center align-items-center pb-4">
        <img src={require('../assets/car3.jpg')} width={400}/>  
    </div>
    <div className="d-flex justify-content-center align-items-center" style={{color:'red'}}>
        <h4>SUBSCRIPTION a CAR and</h4>   
    </div>
    <div className="d-flex justify-content-center align-items-center">
        <h4>SAVE 2 LAKH</h4>   
    </div>
    <div className="d-flex justify-content-center align-items-center" style={{color:'red'}}>
        <h6>0% Down Payment</h6>   
    </div>
    <div className="d-flex justify-content-center align-items-center">
        <p>Tax Benefits - Flexible security desposit & tenure</p>   
    </div>
    <div className="d-flex justify-content-center align-items-center">
        <p>Insurance coverage - Hassie free maintenance</p>   
    </div>
    <div className="d-flex justify-content-center align-items-center">
        <p>Depreciation escaped & more</p>   
    </div>
    <div className="d-flex justify-content-center align-items-center pt-5">
        <h5>For more info: +91 9500707437</h5>   
    </div>
    
    
    </section>
    
    // <ListGroup as="ol" numbered>
    //   <ListGroup.Item
    //     as="li"
    //     className="d-flex justify-content-between align-items-start">
    //     <div className="ms-2 me-auto">
    //       <div className="fw-bold">Margherita</div>
    //       Cras justo odio
    //     </div>
    //   </ListGroup.Item>
    //   <ListGroup.Item
    //     as="li"
    //     className="d-flex justify-content-between align-items-start">
    //     <div className="ms-2 me-auto">
    //       <div className="fw-bold">Cheese Pizza</div>
    //       Cras justo odio
    //     </div>
    //   </ListGroup.Item>
    //   <ListGroup.Item
    //     as="li"
    //     className="d-flex justify-content-between align-items-start">
    //     <div className="ms-2 me-auto">
    //       <div className="fw-bold">Fajita</div>
    //       Cras justo odio
    //     </div>
    //   </ListGroup.Item>
    // </ListGroup>
  )
}

export default Browers
