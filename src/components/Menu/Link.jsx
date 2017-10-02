import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom'
var classNames = require('classnames');
class Link extends Component {

  render() {
      const classes = {};
      classes["active"] = this.props.activo;
      const attrs = {
          className: classNames(classes)
      };

    return <li {...attrs}>
        <NavLink to={this.props.to} >{this.props.title}</NavLink>
              {/*<a  href={this.props.to}>{this.props.title}</a>*/}
              {this.props.children}
            </li>
           }
}

export default Link;