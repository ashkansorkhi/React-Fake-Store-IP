import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import style from './navigation.css'
import * as React from 'react';
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Navigation() {
  return ( <div className= "nav-container">

<div className = "navBar" role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
        electronics
        </Link>
        <Link underline="hover" color="inherit" href="#">
        jewelery
        </Link>
        <Link underline="hover" color="inherit" href="#">
        men's clothing
        </Link>
        <Link underline="hover" color="inherit" href="#">
        women's clothing
        </Link>
        <Typography color="text.primary">About us</Typography>
      </Breadcrumbs>
    </div>

  </div>
   
  );
}