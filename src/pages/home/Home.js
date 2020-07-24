import React, { Component } from 'react';
import NavBar from '../NavBar'
import Body from './Body';


import Footer from '../Footer';
class Home extends Component {
    state = {  }
    render() { 
        return (

        <React.Fragment>
        <NavBar id={this.props.id} />
        <Body />
        <Footer />
        </React.Fragment>
        );
    }
}
 
export default Home;



