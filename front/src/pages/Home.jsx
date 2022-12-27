import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import Accordion from 'react-bootstrap/Accordion';
import Bg1 from '../images/login.png';
import Bg2 from '../images/register.png';
import Bg3 from '../images/remote.png';


const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);

    var carousalVariant = '';
    if (index !== 0) {
      carousalVariant = 'dark';
    } else {
      carousalVariant = '';
    }

    return <>
        <div id="home">
           <div className="section-1">                   
            <Carousel activeIndex={index} onSelect={handleSelect} variant={carousalVariant} style={{height: "800px"}}>
              <Carousel.Item>
                <img
                  style={{height: "800px"}}
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2 className='fs-1 fw-bold text-uppercase'>First slide label</h2>
                  <p className='text-uppercase'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{height: "800px"}}
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1530543787849-128d94430c6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h2 className='fs-1 fw-bold text-uppercase'>Second slide label</h2>
                  <p className='text-uppercase'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{height: "800px"}}
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h2 className='fs-1 fw-bold text-uppercase'>Third slide label</h2>
                  <p className='text-uppercase'>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>         
          <div className="section-2 g-4 p-5">
            <h2 className='text-center pb-5'>WHY HIRE US ?</h2>
            <Row xs={1} md={2}>
                <Col>
                  <Figure>
                    <Figure.Image
                      width={872}
                      height={600}
                      style={{borderRadius: "2%"}}
                      alt="171x180"
                      src={Bg1}
                    />
                  </Figure>
                </Col>
                <Col className='d-flex align-items-center justify-content-center text-center'>
                  <div className="demo-content">
                    <h2>Demo Content</h2>
                    <p>This is just a Demo</p>
                  </div>
                </Col>
            </Row>
          </div>
          <div className="section-3 g-4 p-5">
            <h2 className='text-center pb-5'>PROJECT INFO</h2>
            <Row xs={1} md={3}>
                <Col>
                  <Card className='border-0'>
                    <Card.Img style={{height: "400px"}} variant="top" src={Bg2} />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className='border-0'>
                    <Card.Img style={{height: "400px"}} variant="top" src={Bg1} />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className='border-0'>
                    <Card.Img style={{height: "400px"}} variant="top" src={Bg3} />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
          </div>
          <div className="section-4 g-4 p-5" >
            <h2 className='text-center pb-5'>TESTIMONIALS</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Peter</Accordion.Header>
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
              <Accordion.Item eventKey="1">
                <Accordion.Header>Adam</Accordion.Header>
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
          </div>
        </div>
    </>
  }
  
export default Home