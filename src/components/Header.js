import React, { Component } from 'react';
// import {useLocation} from 'react-router-dom'

export default class Header extends Component {
  render() {
    // const location = useLocation();
    return (
      <header>
        <h1>
          Header
        </h1>
        {/* {location.pathname === '/' && <h2>useLocation</h2>} */}
      </header>
    )
  }
}
