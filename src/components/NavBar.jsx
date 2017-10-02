
import React, { Component } from 'react';
import MyMenu from './Menu/Menu'
// import {
//   NavLink
// } from 'react-router-dom'


class NavBar extends Component {
  render() {
      var options = {
          background: "black", //background del menu
          themeColor: "green", //color letras de menu
          simbolo: "glyphicon-chevron-down", // simbolo que sale al lado derecho de los dropdown y megamenu
          fixed: true, //indice si el menu se queda fijo o no al dar scroll,si true agregar  margin-top: 80px; al body
           skin:"rounded-boxed" // estilo que se aplica a las propiedades hover y menu activos
      };
    return (
        <MyMenu name="Menu" options={ options }>

        </MyMenu>
    // {/*<nav className="navbar navbar-fixed-top navbar-inverse">*/}
    //   {/*<div className="container">*/}
    //     {/*<div className="navbar-header">*/}
    //       {/*<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">*/}
    //         {/*<span className="sr-only">Toggle navigation</span>*/}
    //         {/*<span className="icon-bar"></span>*/}
    //         {/*<span className="icon-bar"></span>*/}
    //         {/*<span className="icon-bar"></span>*/}
    //       {/*</button>*/}
    //       {/*<a className="navbar-brand" href="/home">Project name</a>*/}
    //     {/*</div>*/}
    //     {/*<div id="navbar" className="collapse navbar-collapse">*/}
    //       {/*<ul className="nav navbar-nav">*/}
    //
    //       {/*<li>*/}
    //         {/*<NavLink to="/home">Home</NavLink>*/}
    //       {/*</li>*/}
    //       {/*<li>*/}
    //         {/*<NavLink to="/otro">Otra</NavLink>*/}
    //       {/*</li>*/}
    //         {/*<li>*/}
    //           {/*<NavLink to="/tercero">Tercero</NavLink>*/}
    //         {/*</li>*/}
    //      {/**/}
    //       {/*</ul>*/}
    //     {/*</div>*/}
    //   {/*</div>*/}
    // {/*</nav>*/}
    );
  }
}

export default NavBar;
