import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MDBBadge, MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarLink } from 'mdb-react-ui-kit';
import ProgressBar from 'react-bootstrap/esm/ProgressBar';

// browserHistory.push('/some/path')


const Header = ({isAllowed, isAdminPage}) => {
   
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [cross, setCross] = useState('Icon');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleCrossOpen = () => {
        setCross('Icon open')
    };
    const handleCrossClose = () => {
        setCross('Icon')
    };

    
    const changeNavigation = (e) => {
        e.preventDefault();
        setShow(false);
        navigate(e.target.getAttribute('href'));
    };

    const handleLogout = () => {
        localStorage.setItem('auth', false);
        isAllowed = false;
        console.log(isAllowed)
        navigate(0);
    }
    
    const [counter, setCounter] = useState(0);
    const [bar, setBar] = useState('flex');

    useEffect(() => {   
        setTimeout(() => {
            setBar('none')
        }, 800);
        setCounter(100);
    },[]);
    
    return <>
        <div> 
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Container fluid>
                <Navbar.Brand className='text-white fw-semibold fs-2' href="/" onClick={changeNavigation}>React</Navbar.Brand>
                <div className='right d-flex align-items-center justify-content-center gap-2'>
                    <MDBNavbarLink className='d-flex align-items-center mt-1' href='#'>
                        <MDBBadge pill color='danger'>1</MDBBadge>
                        <span>
                            <MDBIcon fas icon='shopping-cart' className='fs-5' color="white"></MDBIcon>
                        </span>
                    </MDBNavbarLink>
                    <div id="icon" className="Icon-nav me-3" onClick={handleShow} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <Offcanvas placement={'end'} show={show} onHide={handleClose} className="bg-primary">
                    <Offcanvas.Header >                   
                    <Offcanvas.Title className='text-white'>Demo</Offcanvas.Title>
                    <div id="icon" className={cross} onClick={handleClose}  onMouseEnter={handleCrossOpen} onMouseLeave={handleCrossClose}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto text-white">
                            <Nav.Link href="/" onClick={changeNavigation}>Home</Nav.Link>
                            <Nav.Link href="/about" onClick={changeNavigation}>About</Nav.Link>
                            <Nav.Link href="/contact" onClick={changeNavigation}>Contact</Nav.Link>
                            {JSON.parse(isAllowed) 
                                ? <Nav.Link href="/dashboard" onClick={changeNavigation}>Dashboard</Nav.Link>
                                : <Nav.Link href="/register" onClick={changeNavigation}>Sign Up</Nav.Link>  
                            }  
                            
                            {JSON.parse(isAllowed) 
                                ? <Nav.Link href="#" onClick={handleLogout}>Sign Out</Nav.Link>  
                                : <Nav.Link href="/login" onClick={changeNavigation}>Sign In</Nav.Link>  
                            }                         
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
        <ProgressBar style={{display: bar, height: "5px", borderRadius:'0px'}} animated striped variant="primary" now={counter} ></ProgressBar>
        {isAdminPage ?
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBBreadcrumb>
                <MDBBreadcrumbItem>
                    <a href='#'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                    <a href='#'>Library</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>
                    <a href='#'>Data</a>
                </MDBBreadcrumbItem>
                </MDBBreadcrumb>
            </MDBContainer>
        </MDBNavbar>
        : ''}
        </div>
    </>
}

export default Header