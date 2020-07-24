import React, { Component } from 'react';
import Intros from './Intros'
import MotionIntro from './MotionIntro';
import Values from './Values';
import './Home.css'
import Testimonies from './Testimonies';
class Body extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <MotionIntro />
            <Intros />
            <Values />
            <Testimonies />
            </React.Fragment>
        );
    }
}
 
export default Body;