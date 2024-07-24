
import '../App.scss'
import '../index.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
  window.onscroll = function () {
    handleScroll();
  };

  function handleScroll() {
    var upperNavbar = document.getElementById("navbar-upper");
    if (window.scrollY > 50) { // You can adjust the value for when the upper navbar should disappear
      upperNavbar.style.display = "none";
    } else {
      upperNavbar.style.display = "block";
      upperNavbar.style.boxShadow = "2px 2px 5px 5px red";
      
    }
  }

  return (
    <>
      <div class="navbar" id="navbar">
        <div class="navbar-upper" id="navbar-upper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-12 sb">
                <button className="nav_btn">Appoitment</button>
                <button className="nav_btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" me-1 bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg><span>9999999999</span></button>
              </div>
              <div className="col-lg-4 col-sm-12">
                <marquee behavior="" direction=""> <span style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>Only Centre With Latest <a href="" style={{ color: 'yellow', fontSize: '1.6rem' }}> 'Clear' </a> Procedure For Removal Of Glasses</span></marquee>
              </div>
              <div className="col-lg-4 col-sm-12 pt-2">
                <span style={{ fontSize: '1.2rem' }}>Working Hours: Mon-Sat: 9am - 6pm   <a className='ms-3' href="" style={{ color: 'yellow' }}>Map</a></span>

              </div>
            </div>
          </div>
        </div>
        <div class="navbar-lower">
          <div className='dr'>
          </div>
          <div>
            {['lg'].map((expand) => (
              <Navbar key={expand} expand={expand} className=" mb-3" style={{ backgroundColor:'red !important'}}>
                <Container fluid>
                  <Navbar.Brand href="#">
                    <img src="static\images\logo2.webp" alt="logo2" height='90' />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Offcanvas
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="jcse pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About US</Nav.Link>
                        <Nav.Link href="#action2">Find Eye Specialist</Nav.Link>
                        <Nav.Link href="#action2">Services</Nav.Link>
                        <NavDropdown
                          title="Dropdown"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action4">
                            Another action
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action5">
                            Something else here
                          </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action1">Know Your Eye</Nav.Link>
                        <Nav.Link href="#action2">Disease</Nav.Link>
                        <Nav.Link href="#action2">Contact us</Nav.Link>
                        <Nav.Link href="#action2">Gallery</Nav.Link>
                        <Nav.Link href="#action2">Charity</Nav.Link>
                        <Nav.Link href="#action2">Empanelment</Nav.Link>
                      </Nav>
                      <Navbar.Brand href="#">
                    <img src="static\images\logo1.webp" alt="logo1" height='80' />
                  </Navbar.Brand>
                    </Offcanvas.Body>
                    
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
