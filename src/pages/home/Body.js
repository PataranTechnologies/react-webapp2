import React, { Component } from 'react';
import Intros from './Intros'
import MotionIntro from './MotionIntro';
import Values from './Values';
class Body extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <MotionIntro />
            <Intros />
            <Values />
            </React.Fragment>
        );
    }
}
 
export default Body;