import React, { Component } from 'react';
import Intro from './Intro'
class Intros extends Component {
    state = {
 
        intros:[{background:'firstIntro',
                 title:'Who are We?',
                 intro:'Ever since its inception in 2015, with a commitment to deliver value-based technology consulting & software development services, CodeBlock Technologies has gained momentum to emerge as a driving force in all of its target market We pride in having an exquisite bench strength with the right combination of seasoned IT professionals to deliver best-in-class enterprise-grade software.',
                 body:'firstIntroBody',     
    },{background:'secondIntro',
    title:'Technology Partners',
    intro:'Over the years, we’ve set benchmark standards in cloud technologies and serverless architecture that helps us optimise Infrastructure cost and maximise process ROI.',
    body:'secondIntroBody',     
}]

      }
    render() { 
        return (


            <React.Fragment>
             <div className='intr'>
                {this.state.intros.map(intro=>(
                    <Intro intro={intro} />
                ))}
         </div>
         </React.Fragment>
          );
    }
}
 
export default Intros;