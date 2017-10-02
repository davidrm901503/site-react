import React, {Component} from 'react';
import  Mega from './Mega'
import  Link from './Link'
import  DropDown from './DropDown'
import  Col from './Col'
import  Row from './Row'
import foto from '../../images/trimestrales.jpg'
import '../../css/bootstrap.css';


var classNames = require('classnames');


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMobileButton: this.props.showMobile,
            fixed: this.props.options.fixed !== undefined ? this.props.options.fixed : false
        }
    }

    toggleMenu() {
        if (window.innerWidth < 768) {
            this.setState({showMobileButton: true});
        } else {
            this.setState({showMobileButton: false});
        }
    }

    handlershowMobileButton(e) {
        e.preventDefault();
        this.setState({showMobileButton: !this.state.showMobileButton});
    }

    run() {
        // variables
        var container = document.getElementById('menurc');
        var menu = container.lastChild;
        if (this.props.options.skin !== undefined)
            document.head.innerHTML += "<link href='/css/skin/" + this.props.options.skin + ".css' rel='stylesheet'>"

        var submenus = menu.querySelectorAll(".dropdown, .megamenu");
        if (window.innerWidth > 768) {
            var menu_width = container.offsetWidth;
            submenus.forEach(function (el) {

                el.style.display = 'block';

                if (el.parentNode.offsetLeft + el.offsetWidth > menu_width)
                    el.style.right = '0';
                else {
                    if (menu_width === el.offsetWidth || (menu_width - el.offsetWidth) < 20)
                        el.style.left = '0px';
                    if (el.parentNode.offsetLeft + el.offsetWidth < menu_width)
                        el.style.right = 'auto';
                }
                el.style.display = 'none';
            });

        }

    }

    componentDidMount() {
        this.toggleMenu();
         window.addEventListener("resize", this.toggleMenu.bind(this));

        // window.addEventListener("resize", this.resize());

        // in case the document is already rendered
        if (document.readyState !== 'loading') this.run();
        // modern browsers
        else if (document.addEventListener) document.addEventListener('DOMContentLoaded', this.run());
        // IE <= 8
        else document.attachEvent('onreadystatechange', function () {
                if (document.readyState === 'complete') this.run();
            });

    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.toggleMenu.bind(this));
        window.removeEventListener("click", this.handlershowMobileButton.bind(this));
    }

    render() {
        var style = {
            base: {
                background: this.props.options.background
            },
        };
        const classes = {};
        classes["menurc"] = true;
        classes["menurc-responsive"] = true;
        classes[this.props.options.themeColor] = this.props.options.themeColor !== undefined;
        classes[this.props.themeColor] = this.props.options.themeColor === undefined;
        const attrs = {
            className: classNames(classes)
        };
        var styles = {
            display: this.state.showMobileButton ? "none" : "block"
        };
        let fixed = {
            className: this.state.fixed ? "fixed" : ""
        };
        return <div {...fixed}>

            <nav id="menurc" {...attrs} style={style.base}>
                <div className="container">
                    <a className="showhide"
                       onClick={this.handlershowMobileButton.bind(this)}><em></em><em></em><em></em></a>
                    <a href="/home" className="menurc-brand"> {this.props.name}</a>
                    <ul className="menurc-menu" style={styles}>
                        <Link title="Home" to="/home"/>
                        <DropDown ruta="/tercero" simbolo={this.props.options.simbolo} title="Dropdown">
                            <Link title="Tercero" to="/tercero/vista"/>
                            <Link title="link 2" to="#">
                            </Link >
                            <DropDown simbolo={this.props.options.simbolo} title="Dropdown ">
                                <Link title="link 2" to="#"/>
                            </DropDown>
                        </DropDown>
                        <Link title="Otro" to="/otro"/>
                        <Mega simbolo={this.props.options.simbolo} title="Mega" tipo = "megamenu-75-width">
                            <Row>
                                <Col size="3">
                                    <ul className="list-dashed">
                                        <li>
                                            <h5><strong>Titulo:</strong></h5>
                                        </li>
                                        <Link title="link 1" to="#"/>
                                        <Link title="link 2" to="#"/>
                                        <Link title="link 2" to="#"/>
                                        <Link title="link 2" to="#"/>
                                    </ul>
                                    <ul className="list-dashed">
                                        <li>
                                            <h5><strong>Titulo2:</strong></h5>
                                        </li>
                                        <Link title="link 1" to="#"/>
                                        <Link title="link 1" to="#"/>
                                        <Link title="link 1" to="#"/>
                                        <Link title="link 2" to="#"/>
                                    </ul>
                                </Col>
                                <Col size="5">
                                    <h5><strong>Titulo: </strong></h5>
                                    <article className="post clearfix">
                                        <div className="entry-header">
                                            <div className="post-thumb">
                                                <img src={foto} alt=""/>
                                            </div>
                                        </div>
                                        <div className="post-details">
                                            <h4 className="entry-title "><a >Titulo del blog</a></h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam
                                                consectetur deleniti doloremque esse eveniet facilis, illo impedit
                                                minima, nihil nobis obcaecati quaerat repellendus saepe sed sit veniam?
                                                Illo, tempore.
                                            </p>
                                        </div>
                                    </article>
                                </Col>
                                <Col size="4">
                                    <ul className="list-solid">
                                        <li>
                                            <h5><strong>Titulo2:</strong></h5>
                                        </li>
                                        <Link title="link 1" to="#"/>
                                        <Link title="link 2" to="#"/>
                                        <Link title="link 3" to="#"/>
                                        <Link title="link 4" to="#"/>
                                    </ul>
                                    <ul className="list-solid">
                                        <li>
                                            <h5><strong>Titulo2:</strong></h5>
                                        </li>
                                        <Link title="link 1" to="#"/>
                                        <Link title="link 2" to="#"/>
                                        <Link title="link 4" to="#"/>
                                        <Link title="link 5" to="#"/>
                                    </ul>
                                </Col>
                            </Row >
                        </Mega>
                        <DropDown simbolo={this.props.options.simbolo} title="Dropdown">
                            <Link title="link 1" to="#" />
                            <Link title="link 2" to="#">

                            </Link >
                            <DropDown simbolo={this.props.options.simbolo} side="left" title="Dropdown">
                                <Link title="link 2" to="#"/>
                                <Link title="link 2" to="#"/>
                                <DropDown simbolo={this.props.options.simbolo} title="Dropdown">
                                    <Link title="link 2" to="#"/>
                                    <Link title="link 2" to="#"/>
                                </DropDown>
                            </DropDown>
                        </DropDown>

                    </ul>

                </div>
            </nav>
        </div>
    }
}
Menu.defaultProps = {
    showMobile: false,
    themeColor: "black",
    name: "Owner",
};

export default Menu;