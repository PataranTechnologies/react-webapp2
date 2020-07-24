import React, { Component } from 'react';

class ProjectsIcons extends Component {
    state = {  }

    constructor(props)
    {
        super(props)

        this.state={
            Projects:[{  
                projectId:1,
                ProjectName:"Charbot",
                ProjectPhoto:'https://static.wixstatic.com/media/cdf2a2_731a5a8221994187b936860c073be95c~mv2.jpg/v1/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/chatbots.jpg'
            },{  
                projectId:2,
                ProjectName:"Charbot",
                ProjectPhoto:'https://static.wixstatic.com/media/cdf2a2_731a5a8221994187b936860c073be95c~mv2.jpg/v1/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/chatbots.jpg'
            },{  
                projectId:3,
                ProjectName:"Charbot",
                ProjectPhoto:'https://static.wixstatic.com/media/cdf2a2_731a5a8221994187b936860c073be95c~mv2.jpg/v1/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/chatbots.jpg'
            },{  
                projectId:4,
                ProjectName:"Charbot",
                ProjectPhoto:'https://static.wixstatic.com/media/cdf2a2_731a5a8221994187b936860c073be95c~mv2.jpg/v1/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/chatbots.jpg'
            },{  
                projectId:5,
                ProjectName:"Charbot",
                ProjectPhoto:'https://static.wixstatic.com/media/cdf2a2_731a5a8221994187b936860c073be95c~mv2.jpg/v1/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/chatbots.jpg'
            },{  
                projectId:6,
                ProjectName:"Charbot",
                ProjectPhoto:'https://static.wixstatic.com/media/cdf2a2_731a5a8221994187b936860c073be95c~mv2.jpg/v1/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/chatbots.jpg'
            },]
        }
    }
    render() { 
        return (

            <React.Fragment>

              <div className='projectsIcons'>
                      <h3>Projects</h3>

        <div className='marginsides'>
               <div className='row '>

                {this.state.Projects.map(project=>
                        <div className='col-4 iconmarg' key={project.projectId}>
                        <img className='ProjectImgSize' src={project.ProjectPhoto}  alt='' />
                        <p>{project.ProjectName}</p>
                        </div>
                 ) },
            
                 
                  </div>
                  </div>
</div>
            </React.Fragment>

          );
    }
}
 
export default ProjectsIcons;