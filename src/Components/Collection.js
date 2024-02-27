import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

const Collection = () => {
  return (
    <section>
        <Container>
            <Row className='pb-3'>
                <Image src={require('../assets/car3.jpg')} width={300}/>
            </Row>
            <Row className='pb-3'>
                <Image src={require('../assets/car4.jpg')} width={300}/>
            </Row>
            <Row className='pb-3'>
                <Image src={require('../assets/car5.jpg')} width={300}/>
            </Row>
            <Row className='pb-3'>
                <Image src={require('../assets/car6.jpg')} width={300}/>
            </Row>
            <Row className='pb-3'>
                <Image src={require('../assets/car7.jpg')} width={300}/>
            </Row>
            <Row className='pb-3'>
                <Image src={require('../assets/car8.jpg')} width={300}/>
            </Row>
            <Row className='pb-3'>
                <Image src={require('../assets/car9.jpg')} width={300}/>
            </Row>
            <Row className='pb-3'>
                <Image src={require('../assets/car10.jpg')} width={300}/>
            </Row>
            <Row className='pb-3'>
                <Image src={require('../assets/car11.jpg')} width={300}/>
            </Row>
            <Row className='pb-3'>
                <Image src={require('../assets/car12.jpg')} width={300}/>
            </Row>
            <Row className='pb-3'>
                <Image src={require('../assets/car13.jpg')} width={300}/>
            </Row>
        </Container>
    </section>
  )
}

export default Collection
