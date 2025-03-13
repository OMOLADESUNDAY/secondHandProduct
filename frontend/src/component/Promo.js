import React from 'react'
import Figure from 'react-bootstrap/Figure';
import figureImage from '../assest/carouselimage.png'
import figureImage2 from '../assest/carouselImage2.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Promo = () => {
  return (
    <Row>
        <Col>
        <Figure>
    <Figure.Image
      width={171}
      height={180}
      alt="171x180"
      src={figureImage}
    />
    <Figure.Caption>
      Nulla vitae elit libero, a pharetra augue mollis interdum.
    </Figure.Caption>
  </Figure>
        </Col>
        <Col>
        <Figure>
    <Figure.Image
      width={171}
      height={180}
      alt="171x180"
      src={figureImage2}
    />
    <Figure.Caption>
      Nulla vitae elit libero, a pharetra augue mollis interdum.
    </Figure.Caption>
  </Figure>
        </Col>
      </Row>
   
  )
}

export default Promo