import React, { Component } from 'react';
import './service.css'
import ServicesTag from './ServicesTag'
class Body extends Component {
    state = {  }
    render() { 
        return ( 

            <React.Fragment>
            
              
            <img src={'https://www.targettraining.eu/wp-content/uploads/2019/02/meetings-practice-1030x613.jpg'} alt='' className='serviceImage' />

              
            <ServicesTag />
            </React.Fragment>

         );
    }
}
 
export default Body;