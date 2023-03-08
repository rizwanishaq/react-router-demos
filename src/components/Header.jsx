import Container from 'react-bootstrap/Container';
import {NavLink, Link} from 'react-router-dom'
import { MagnifyingGlassIcon,Squares2X2Icon} from '@heroicons/react/24/outline';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaFacebookF} from 'react-icons/fa'
import { AiOutlineHeart, AiOutlineShopping,AiOutlineInstagram,AiOutlineUnorderedList } from 'react-icons/ai';



const Header = () => {
    return (
      <Navbar expand="lg" sticky="top"  style={{"backgroundColor": "hsl(var(--bkg))"}}>
        <Container className="fluid">
            <Navbar.Brand>
              <Link to="/" aria-label="Go to home" className="link">
                  <span>RiisBi</span>
              </Link>
          </Navbar.Brand>
          <Nav>
            <NavDropdown title={<span><AiOutlineUnorderedList width={30}/></span>} className="dropdown-toggle">
                <NavDropdown.Item href="/something"><span><Squares2X2Icon width={30} /></span></NavDropdown.Item>
                <NavDropdown.Item href="/cart" className='link'><span><AiOutlineShopping width={30} /></span></NavDropdown.Item>
                <NavDropdown.Item href="/wishlist" className='link'><span><AiOutlineHeart width={30} /></span></NavDropdown.Item>
                <NavDropdown.Item href="#" className="link"><span><FaFacebookF width={30} /></span></NavDropdown.Item>
                <NavDropdown.Item href="#" className="link"><span><AiOutlineInstagram width={30} /></span></NavDropdown.Item>
                
                </NavDropdown>       
          </Nav>
        </Container>
      </Navbar>
    )
  }

export default Header