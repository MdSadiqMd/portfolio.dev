import React, { Component } from 'react';
import './header.css';
import Image from 'next/image';
import Logo from '../../public/assets/favicon-32x32.png'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faBars, faTimes);

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <div id='nav'>
          <Image src={Logo} alt='logo' />
          <div>
            <ul id="navbar" className={this.state.clicked ? "active" : ""}>
              <li><a className='active' href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div id='mobile' onClick={this.handleClick}>
            <FontAwesomeIcon
              icon={this.state.clicked ? 'times' : 'bars'}
              id="bar"
              style={{
                fontSize: '24px', 
                color: '#fff', 
                marginRight: '10px',
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
