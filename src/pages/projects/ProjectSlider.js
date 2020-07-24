import React, { Component } from 'react';

class ProjectSlider extends Component {
    state = {  }

    constructor(props)
    {
        super(props)
        this.state={
            currentImage:0,
            images:["https://i.pcmag.com/imagery/reviews/00tdYt3QXuqn8T8kO6CDyBQ-5.fit_scale.size_1028x578.v_1569478213.jpg","https://tdf.drdo.gov.in/datafiles/54446ca3524e0c1eb13b5b47c6fd1a12.png","https://dficlub.org/wp-content/uploads/2019/09/dcfdsdf.jpg"],
        }
        setInterval(()=>{
             let val=this.state.currentImage+1;
             if (val>=this.state.images.length)
             {
                 val=val-this.state.images.length;
             }
             this.setState({currentImage:val});
            },2000);
    }
    render() { 
        return (  

            <div>
<img src={this.state.images[this.state.currentImage]} className="slider" alt='' />
                </div>

        );
    }
}
 
export default ProjectSlider;