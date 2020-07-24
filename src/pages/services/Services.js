import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Body from './Body'

class Services extends Component {
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
 
export default Services;