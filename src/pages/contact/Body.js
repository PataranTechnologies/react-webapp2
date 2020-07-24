import React, { Component } from 'react';
import GetInTouch from './GetInTouch';
import './Contact.css'
class Body extends Component {
    state = {  }
    render() { 
        return (

            <React.Fragment>
             <img src={'https://www.vwfs.co.in/content/dam/bluelabel/valid/www-vwfs-co-in/images/Contact%20us-%202-1%20-%203000%20px%20X%201500px.jpg.xxl.jpg'} className='contactImage' />

               <GetInTouch />

              
        
            </React.Fragment>



          );
    }
}
 
export default Body;