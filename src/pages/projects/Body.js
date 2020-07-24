import React, { Component } from 'react';
import ProjectSlider from './ProjectSlider';
import ProjectsIcons from './ProjectsIcons';
import './Projects.css'
import Technologies from './Technologies';
class Body extends Component {
    state = {  }
    render() { 
        return (

            <React.Fragment>
            
               <ProjectSlider />
               <ProjectsIcons />
                 <Technologies />
        
            </React.Fragment>



          );
    }
}
 
export default Body;