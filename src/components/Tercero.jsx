import React, {Component} from 'react';
import NavBar from './NavBar';
import RightSide from './RightSide';
import Footer from './Footer';




class Tercero extends Component {
    render() {
        document.title = "Tercero";

        return (
            <div>

                <NavBar />
                <div className="container" style={{marginTop: 80 + 'px'}}>
                    <div className="row row-offcanvas row-offcanvas-right">

                        <div className="col-xs-12 col-sm-9">
                            <h2>Tercer Component</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, blanditiis commodi deleniti dolorem dolorum eligendi eos error explicabo, facilis libero magni molestias non odit perferendis, qui quia quo vitae?</p>

                        </div>
                        <RightSide />

                    </div>
                </div>
                <Footer />

            </div>

        );
    }
}

export default Tercero;
