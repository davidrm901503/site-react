import React, {Component} from 'react';
var classNames = require('classnames');
class Mega extends Component {
    constructor(props) {

        super(props);
        this.state = {
            toogleChildren: false
        }
    }

    hideOpen(e){
        if (window.innerWidth > 769)
        {
            this.setState({toogleChildren: false});
        }

    }
    componentDidMount() {
        window.addEventListener("resize", this.hideOpen.bind(this));
    }

    // expandir hijos en vista movil
    toogleChildren(e) {
        e.preventDefault();
        if (window.innerWidth < 768) {
            this.setState({toogleChildren: !this.state.toogleChildren});
        }

    }

    render() {
        const classes = {};
        classes["megamenu"] = true;
        classes[this.props.tipo] = true;
        const attrs = {
            className: classNames(classes),
            style: {
                display: this.state.toogleChildren ? "block" : "none"
            }
        };

        const indicatorClass = {};
        indicatorClass["glyphicon"] =true;
        indicatorClass[this.props.simbolo] = this.props.simbolo !== undefined ;
        // const indicator = {
        //     className: classNames(indicatorClass)
        // };

        // const childWithProp = React.Children.map(this.props.children, (child) => {
        //     return React.cloneElement(child, {visible: this.state.toogleChildren ? "block" : "none"});
        // });
        return <li >
            <a>{this.props.title}
                <span onClick={this.toogleChildren.bind(this)} className="indicator">&nbsp;
                    <span className="glyphicon glyphicon-chevron-down" aria-hidden="true">
                  </span>
                </span>
            </a>
            <div  {...attrs}>
                {this.props.children}
                {/*{childWithProp}*/}
            </div>

        </li>
    }
}
Mega.defaultProps = {
     tipo: ""
};
export default Mega;