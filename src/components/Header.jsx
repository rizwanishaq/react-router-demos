import Container from 'react-bootstrap/Container';
import {NavLink, Link} from 'react-router-dom'
import { HeartIcon, ShoppingBagIcon, MagnifyingGlassIcon,Squares2X2Icon} from '@heroicons/react/24/outline';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai';


const Header = () => {
    return (
      <Navbar expand="sm" sticky="top"  style={{"backgroundColor": "hsl(var(--bkg))"}}>
        <Container >
          <Nav>   
              <NavLink to="#" className="link">
                <span><FaFacebookF width={30} /></span>
              </NavLink>
            <Nav.Link ><span><AiOutlineInstagram width={30} /></span></Nav.Link>
          </Nav>
            <Navbar.Brand>
              <Link to="/" aria-label="Go to home" className="link">
                  <span>RiisBi</span>
              </Link>
          </Navbar.Brand>
          <Nav>   
            <NavLink to="/something" className='link'><span><Squares2X2Icon width={30} /></span></NavLink>
            <NavLink to="/cart" className='link'><span><ShoppingBagIcon width={30} /></span></NavLink>
            <NavLink to="/wishlist" className='link'><span><HeartIcon width={30} /></span></NavLink>
            <NavLink to="/search" className='link'><span><MagnifyingGlassIcon width={30} /></span></NavLink>
          </Nav>
        </Container>
      </Navbar>
    )
  }

export default Header