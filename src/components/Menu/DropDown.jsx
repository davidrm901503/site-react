import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom'
var classNames = require('classnames');

 class DropDown extends Component {
  constructor(props) {
      super(props);
      this.state = {
        viewChildrens:this.props.visible,
          ruta:this.props.ruta
      }
  }

  hideOpen(e){
    if (window.innerWidth > 769)
      {
        this.setState({ viewChildrens: false});   
      }
    
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.hideOpen.bind(this));
  }

  viewChildrens(e){
    e.preventDefault();
    if (window.innerWidth < 768)     
        this.setState({ viewChildrens: !this.state.viewChildrens});      
  }
  onClick(e){
       e.preventDefault();
  }
  render() {
    var styles ={
      display:this.state.viewChildrens ? "block" : "none "
    };
      const classes = {};

      classes["dropdown"] = true;
      classes["dropdown-left"] = this.props.side === "left";
      const attrs = {
          className: classNames(classes)
      };

      const indicatorClass = {};
      indicatorClass["glyphicon"] =true;
      indicatorClass[this.props.simbolo] = this.props.simbolo !== undefined ;

      const indicator = {
          className: classNames(indicatorClass)
      };

    return <li >
            {/*<a href="#">{this.props.title}*/}
                <NavLink onClick={this.onClick.bind(this)} to={this.state.ruta} >{this.props.title}
              <span onClick = {this.viewChildrens.bind(this)} className="indicator">&nbsp;
                  <span {...indicator} aria-hidden="true">
                  </span>

              </span>
              {/*<span onClick = {this.viewChildrens.bind(this)} className="indicator">&nbsp; {this.props.simbolo}</span>*/}
                </NavLink>
              {/*</a>*/}
            <ul {...attrs} style = {styles}>
              {this.props.children}
            </ul>
          </li>
           }
}
DropDown.defaultProps= {
  visible :false,
    side:"",
    ruta:"#"
};

export default DropDown;