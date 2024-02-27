import React ,{useState , useRef} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Browers from './Browers';

const AppBar = () => {
  const [apple, setApple] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <Navbar expand="lg" className="bg-body-tertiary font-size" sticky='top'>
    <Container>
    <img className='d-block' src={require('../assets/Vector.png')} alt='First folder'/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav className='ms-auto'>
          <Nav.Link href="#Browers" className='me-4'>Corporate Lease</Nav.Link>
          <Nav.Link href="#" className='me-4'>Self Driving</Nav.Link>
          <Nav.Link href="#">FAQ</Nav.Link>
        </Nav>

        <Nav className='ms-auto'>
        <Nav.Link href="#" className='me-4 mb-2 btn bg-dark' style={{borderRadius:'36px',paddingLeft:'12px',paddingRight:'12px',color:'white'}} ref={target} onClick={() => setApple(!apple)}><i class="bi bi-telephone"></i></Nav.Link>
        <Overlay target={target.current} show={apple} placement="bottom">
        {(props) => (
          <Tooltip {...props}>9500707437</Tooltip>
        )}
      </Overlay>
        <Nav.Link href="#" className='me-4 mb-2 btn bg-dark' style={{borderRadius:'36px',paddingLeft:'12px',paddingRight:'12px',color:'white'}} onClick={()=>setShow(!show)}><i class="bi bi-person-fill"></i></Nav.Link>
        <Offcanvas show={show}  onHide={()=>setShow(!show)} placement={'end'}  style={{background:'silver'}}>
        <Offcanvas.Header closeButton>
          
        </Offcanvas.Header>
        <Browers/>
      </Offcanvas>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppBar;
