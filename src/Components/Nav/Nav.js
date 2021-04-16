import React from 'react';
import Button from '@material-ui/core/Button';
import './Nav.scss';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <ul>
      <li style={{ float: 'left',  marginLeft: '1vh' }}>
        <Link style={{ textDecoration: 'none', color: 'white' }}>
          Mohammed Alhaq
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: 'white' }}> 
          Home
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: 'white' }}>
          About Me
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: 'white' }}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: 'none', color: 'white' }}>
          Contact
        </Link>
      </li>
      <li style={{ float: 'right',  marginRight: '1vh', right: 0 }}>
        <Button variant="outlined" color="secondary">
          Resume
        </Button>
      </li>
    </ul>
  );
}

export default Nav;
