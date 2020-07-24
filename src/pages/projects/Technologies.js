import React, { Component } from 'react';

class Technologies extends Component {
    state = {  }

    constructor(props)
    {
        super(props)

        this.state={
            technologies:[{  
                techId:1,
                techName:"Alexa",
                techPhoto:'https://static.wixstatic.com/media/cdf2a2_6afb671fd587485aab3ef08f0ec10eb5~mv2.jpeg/v1/fill/w_301,h_210,al_c,lg_2,q_80,usm_0.66_1.00_0.01/alesaa.jpeg'
            },
            {  
                techId:1,
                techName:"Machine Learning",
                techPhoto:'https://static.wixstatic.com/media/cdf2a2_94c68c6ca2094f61bed67288615665b1~mv2.jpg/v1/crop/x_0,y_0,w_960,h_672/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/robot-507811_960_720.jpg'
            },
            {  
                techId:1,
                techName:"Iot",
                techPhoto:'https://static.wixstatic.com/media/cdf2a2_dd1fa157691744589288def5ee6008e1~mv2.jpg/v1/crop/x_530,y_232,w_557,h_390/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/IoT.jpg'
            },
            {  
                techId:1,
                techName:"Charbot",
                techPhoto:'https://static.wixstatic.com/media/cdf2a2_904bb45006bc4faf94375c0205d9bf89~mv2.jpeg/v1/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/machine.jpeg'
            },
            {  
                techId:1,
                techName:"FinTech",
                techPhoto:'https://static.wixstatic.com/media/cdf2a2_1d50f7c4758644b3b719bd1bbc7ff000~mv2.jpg/v1/crop/x_0,y_95,w_626,h_437/fill/w_301,h_210,al_c,q_80,usm_0.66_1.00_0.01/fintech-word-concept_23-2147839481.jpg'
            }]
        }
    }
    render() { 
        return (

            <React.Fragment>

              <div className='TechIcons'>
                     

        <div className='marginsides'>
               <div className='row '>

                {this.state.technologies.map(tech=>
                        <div className='col-4 iconmarg' key={tech.techId}>
                        <img className='ProjectImgSize' src={tech.techPhoto}  alt='' />
                        <p className='tfont'>{tech.techName}</p>
                        </div>
                 ) },
            
                 
                  </div>
                  </div>
</div>
            </React.Fragment>

          );
    }
}
 
export default Technologies;