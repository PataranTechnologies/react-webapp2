import React, { Component } from 'react';
import  './Home.css'
class Intro extends Component {
    state = {  }
    render() { 
        return (

            <div className={this.props.intro.background}>

            <div className={this.props.intro.body}>
              <center className='introcent'>
              <h3>{this.props.intro.title}</h3>
              <p>{this.props.intro.intro} </p>
              </center>
            </div>

                


            </div>
          );
    }
}
 
export default Intro;