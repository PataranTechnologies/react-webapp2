import React, { Component } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Body from './Body'

class Contact extends Component {
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
 
export default Contact;