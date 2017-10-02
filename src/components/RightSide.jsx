import React, {Component} from 'react';
import {
    NavLink
} from 'react-router-dom'

class RightSide extends Component {
    render() {
        return (

            <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
                <div className="list-group">

                    <NavLink to="/home" className="list-group-item">Home</NavLink>
                    <NavLink to="/otro" className="list-group-item">Otro</NavLink>
                    <NavLink to="/tercero/vista" className="list-group-item">Tercero</NavLink>

                </div>
            </div>
        );
    }
}
export default RightSide;

