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
                ProjectName:"Learning Tool",
                ProjectPhoto:'https://static.wixstatic.com/media/cdf2a2_c4d9aed3c8b643d49301031d59d70945~mv2.jpeg/v1/crop/x_173,y_0,w_1527,h_1068/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/edt1.jpeg'
            },{  
                projectId:3,
                ProjectName:"Data",
                ProjectPhoto:'https://static.wixstatic.com/media/cdf2a2_e6f3219b2f094d4ebcaea57835cde1ac~mv2.jpg/v1/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/gh6.jpg'
            },{  
                projectId:4,
                ProjectName:"Groth Hacking",
                ProjectPhoto:'https://static.wixstatic.com/media/cdf2a2_e6f3219b2f094d4ebcaea57835cde1ac~mv2.jpg/v1/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/gh6.jpg'
            },{  
                projectId:5,
                ProjectName:"Vending Machines",
                ProjectPhoto:'https://static.wixstatic.com/media/cdf2a2_e451f2d2c43740189a1a991b819a9e5f~mv2.jpg/v1/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/vending%20machine.jpg'
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
                      <h3 className='hfont'>Projects</h3>

        <div className='marginsides'>
               <div className='row '>

                {this.state.Projects.map(project=>
                        <div className='col-4 iconmarg' key={project.projectId}>
                        <img className='ProjectImgSize' src={project.ProjectPhoto}  alt='' />
                        <p className='tfont'>{project.ProjectName}</p>
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