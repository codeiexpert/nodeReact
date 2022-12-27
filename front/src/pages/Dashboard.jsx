import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Sidebar from './layout/Sidebar';
import Table from 'react-bootstrap/Table';

const Dashboard = ({isAllowed}) => {

  const [sideCollapse, setSideCollapse] = useState(2);
  const [dashCollapse, setDashCollapse] = useState(10);
  
  const setCollapseStatus = (status) =>{
    if(status){
      setSideCollapse(1);
      setDashCollapse(11);
    }else{
      setSideCollapse(2);
      setDashCollapse(10);
    }
  }

  return <>
    <div id="dashboard">
      <Row className="dash-content m-0">
        <Col sm={12} md={sideCollapse} className='ps-0'>
          <Sidebar collapse={setCollapseStatus}/>
        </Col>
        <Col sm={12} md={dashCollapse} className="p-3">
          <div>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 12 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 12 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
          </div>
        </Col>     
      </Row>
    </div>
  </>
}

export default Dashboard