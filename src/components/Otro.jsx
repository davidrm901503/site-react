import React, {Component} from 'react';
import {About, Otro2} from './About';
import NavBar from './NavBar';
import RightSide from './RightSide';
import Footer from './Footer';

import {
    Route,
    Link,
} from 'react-router-dom'


class Otro extends Component {
    render() {
        document.title = "Otra";

        return (
            <div>

                <NavBar />
                <div className="container" style={{marginTop: 80 + 'px'}}>
                    <div className="row row-offcanvas row-offcanvas-right">

                        <div className="col-xs-12 col-sm-12">
                            <h2>Otro Component</h2>
                            <ul>
                                <li>
                                    <Link to="/otro/otro1">
                                        link Subcomponente 1
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/otro/otro2">
                                        link Subcomponente 2
                                    </Link>
                                </li>
                            </ul>
                            <Route path={this.props.match.url + "/otro1"}  component={About}/>

                            <Route path="/otro/otro2" component={Otro2}/>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque cum, distinctio dolorum ducimus error esse et exercitationem fuga iusto minima nam natus nemo numquam possimus qui, quo reprehenderit unde!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque cum, distinctio dolorum ducimus error esse et exercitationem fuga iusto minima nam natus nemo numquam possimus qui, quo reprehenderit unde!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque cum, distinctio dolorum ducimus error esse et exercitationem fuga iusto minima nam natus nemo numquam possimus qui, quo reprehenderit unde!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque cum, distinctio dolorum ducimus error esse et exercitationem fuga iusto minima nam natus nemo numquam possimus qui, quo reprehenderit unde!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque cum, distinctio dolorum ducimus error esse et exercitationem fuga iusto minima nam natus nemo numquam possimus qui, quo reprehenderit unde!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque cum, distinctio dolorum ducimus error esse et exercitationem fuga iusto minima nam natus nemo numquam possimus qui, quo reprehenderit unde!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque cum, distinctio dolorum ducimus error esse et exercitationem fuga iusto minima nam natus nemo numquam possimus qui, quo reprehenderit unde!</p>


                        </div>

                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default Otro;
