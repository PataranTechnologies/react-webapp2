import React, { Component } from 'react';

class Testimonies extends Component {
    state = {  }

    constructor()
    {
        super()
        this.state={
            inview:0,
            testimonies:[
                {
                    id:1,
                    image:'https://static.wixstatic.com/media/cdf2a2_4899eb37f730480fb1bc18b4ac7db50f~mv2.png/v1/fill/w_234,h_233,al_c/raj-anand.png',
                    data:'CodeBlock is truly an expert on Serverless and with their vast knowledge on AWS, they are one of the best in Architecting a Software. With their well planned and flexible architecting designs, CodeBlock is absolute reliable to develop and manage scalable products.With the changing needs of the technology, its not possible for anyone to know everything, but CodeBlock is very quick to do R&D and come up with the best solutions. This considerably improves time to market..',
                    info:'Amir Hardoof, CEO & Founder - Skill Blaster',


                },
                {
                    id:2,
                    image:'https://static.wixstatic.com/media/cdf2a2_18060873e4974e85885b745e554b3c8c~mv2.png/v1/fill/w_234,h_233,al_c,usm_0.66_1.00_0.01/2.png',
                    data:'I had the experience of working with Tannu on a complex API and her skills in NodeJS and experience in AWS have added incredible value to our product and we all learned a great deal from her.',
                    info:'Nick Ihab, Founder - Upilio, Australia',


                },
                {
                    id:3,
                    image:'https://static.wixstatic.com/media/cdf2a2_39aba6037d5e4a438b91214675a79d81~mv2.png/v1/fill/w_234,h_233,al_c,usm_0.66_1.00_0.01/client.png',
                    data:'Hiring CodeBlock is one of the best decisions I have made. Great technical abilities, great understanding of technology, AWS, Serverless and so on, its just great to get everything I needed. Working with them for over a year now on 2 Projects. I really really recommend working with CodeBlock.',
                    info:'Nick Ihab, Founder - Upilio, Australia',


                }
            ]
        }
        setInterval(()=>{
             
            let val=this.state.inview+1;
            if(val>= this.state.testimonies.length)
            {
                val=val-this.state.testimonies.length;
                
            }
            console.log(val+"   "+this.state.testimonies.length);
            this.setState({inview:val});

        },2000);
    }
    render() { 
        return ( 

<React.Fragment>

    <div>
        <div className='test'>
            <h2 className='test'>Client Testimonials</h2>
            </div>
            <div className='mainTest' > 
                <div className='marginsidesTest'>
             <div className='row testinner'>
                  
                <div className='col TestInfo'>

                    <p>
                        {this.state.testimonies[this.state.inview].data}
                    </p>
                     
                    <p className='TestInfocolor'>
                        {this.state.testimonies[this.state.inview].info}
                    </p>

                </div>

               
                <div className='col testimage'>

                    <img src={this.state.testimonies[this.state.inview].image} alt='' />

                </div>

             </div>
              </div>
               
                        
                    
            </div>

        </div>
    </React.Fragment>

         );
    }
}
 
export default Testimonies;