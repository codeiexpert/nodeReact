import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const NoPageFound = () => {

  const navigate = useNavigate();
  const changeNavigation = (e) => {
      e.preventDefault();
      navigate(e.target.getAttribute('href'));
  };
  return <>
    <div id="no-page-found">
      <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps</span> Page not found.</p>
                <p className="lead">
                    404 NOT FOUND.
                  </p>
                <Nav>
                  <Nav.Link className="text-white rounded w-100 text-center bg-primary" href="/" onClick={changeNavigation}>Go Home</Nav.Link>  
                </Nav>
            </div>
        </div>
    </div>
  </>
}

export default NoPageFound