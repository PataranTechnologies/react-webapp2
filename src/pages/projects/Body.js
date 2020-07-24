import React, { Component } from 'react';
import ProjectSlider from './ProjectSlider';
import ProjectsIcons from './ProjectsIcons';

class Body extends Component {
    state = {  }
    render() { 
        return (

            <React.Fragment>
            
               <ProjectSlider />
               <ProjectsIcons />
              
        
            </React.Fragment>



          );
    }
}
 
export default Body;