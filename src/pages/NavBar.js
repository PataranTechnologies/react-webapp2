import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { withRouter,Redirect } from "react-router-dom";
class NavBar extends Component {
   
     
    constructor(props)
    {
        super(props)
        this.state = { activeid:this.props.id ,
            icons:[{id:1,name:'About Us',href:'/about'},{id:2,name:'Services',href:'/service'},{id:3,name:'Projects',href:'/projects'},{id:4,name:'Career',href:'/career'},{id:5,name:'Contact',href:'/contact'}]
     }
        this.handleClick=this.handleClick.bind(this);

    }
    handleClick(id,href){
        
         this.setState({activeid:id});
          this.props.history.push(href);
         return <Redirect to={href}/>
         
    };
    
    render() { 
        return (
            

            <Navbar className='nav_fixed navbar navbar-sticky marzero'>
  <Navbar.Brand href="/"><img alt='' src={'https://static.wixstatic.com/media/cdf2a2_aee27195bd5e4f119f2c15d8f6d290fc~mv2_d_6000_2000_s_2.png/v1/fill/w_150,h_50,al_c,usm_0.66_1.00_0.01/CodeBlock%20Logo_Out%20of%20the%20Box%20Thinkers%20(.png'}  width={80} height={40}/></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    
  <ul className="navbar-nav ml-auto">

        {this.state.icons.map(navItem=>(
             <li className={navItem.id===this.state.activeid ? 'nav-link active' :'nav-link'}>
            <a className="nav-link" role="button" onClick={()=>this.handleClick(navItem.id,navItem.href)}>
             {navItem.name}
             </a>
              </li>
         )
        )}
      
    </ul>

  </Navbar.Collapse>
</Navbar>
        );
    }
}
 
export default withRouter(NavBar);