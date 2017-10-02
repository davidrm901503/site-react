    import React, { Component } from 'react';

class Col extends Component {


    render()
    {
        let size = "col"+this.props.size;

        return  <div className={size}>
                    {this.props.children}
                </div>

    }
}
export default Col;
