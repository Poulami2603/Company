import React from 'react'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <>
<header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo mr-auto"><Link to='/'><span>Com</span>pany</Link></h1>
    

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li><Link to='/'>Home</Link></li>

          <li className="drop-down"><Link to="">About</Link>
            <ul>
              <li className="active"><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/testimonial">Testimonials</Link></li>
              <li className="drop-down"><Link to="#">Deep Drop Down</Link>
                <ul>
                  <li><Link to="#">Deep Drop Down 1</Link></li>
                  <li><Link to="#">Deep Drop Down 2</Link></li>
                  <li><Link to="#">Deep Drop Down 3</Link></li>
                  <li><Link to="#">Deep Drop Down 4</Link></li>
                  <li><Link to="#">Deep Drop Down 5</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>

      <div className="header-social-links">
        <Link to="#" className="twitter"><i className="icofont-twitter"></i></Link>
        <Link to="#" className="facebook"><i className="icofont-facebook"></i></Link>
        <Link to="#" className="instagram"><i className="icofont-instagram"></i></Link>
        <Link to="#" className="linkedin"><i className="icofont-linkedin"></i></Link>
      </div>

    </div>
  </header>
    </>
  )
}

export default Navbar1