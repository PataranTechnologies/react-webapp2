import React, { Component } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Body from './Body'
import './Contact.css'
class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <NavBar />
             <Body />
            <Footer />
            </React.Fragment>
         );
    }
}
 
export default Contact;