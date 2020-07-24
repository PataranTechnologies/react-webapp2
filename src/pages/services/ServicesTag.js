import React, { Component } from 'react';

class ServicesTag extends Component {
    state = {  }
    constructor(props)
    {
        super(props)

        this.state={
            services:[

                {
                    serviceId:1,
                    serviceImage:'https://static.wixstatic.com/media/cdf2a2_7c16a3d774224d8394a151a56e09cb4f~mv2.jpg/v1/fill/w_301,h_200,al_c,q_80,usm_0.66_1.00_0.01/IMG_20170630_141956_423.jpg',
                    serviceNameL:"Software Development",
                },
                {
                    serviceId:2,
                    serviceImage:'https://static.wixstatic.com/media/cdf2a2_35549b2fe49c48b6bac4cfb07133f372~mv2.png/v1/fill/w_301,h_200,al_c,usm_0.66_1.00_0.01/ET2.png',
                    serviceNameL:"Project Management",
                },{
                    serviceId:3,
                    serviceImage:'https://static.wixstatic.com/media/36f4beb3133f47cda5b2af104596b3b1.jpg/v1/fill/w_301,h_200,al_c,q_80,usm_0.66_1.00_0.01/Open%20Laptop.jpg',
                    serviceNameL:"Technoligical arch",
                },{
                    serviceId:4,
                    serviceImage:'https://static.wixstatic.com/media/a4dc4a37e4904958aa58ff268caf9820.jpg/v1/fill/w_301,h_200,al_c,q_80,usm_0.66_1.00_0.01/Programming.jpg',
                    serviceNameL:"Maintenance Support Services",
                },{
                    serviceId:5,
                    serviceImage:'https://static.wixstatic.com/media/cdf2a2_669cc015ae454502bbeff0c79a1b705e~mv2.jpg/v1/fill/w_301,h_200,al_c,q_80,usm_0.66_1.00_0.01/serverless.jpg',
                    serviceNameL:"Seamless Upgrade To Existing Software",
                },{
                    serviceId:6,
                    serviceImage:'https://static.wixstatic.com/media/5ff158be45cb4298b1d6827c8a075c99.jpg/v1/crop/x_0,y_4,w_6046,h_4030/fill/w_301,h_200,al_c,q_80,usm_0.66_1.00_0.01/Giving%20a%20Presentation.jpg',
                    serviceNameL:"Innovative Trainings",
                }
            ]
        }
    }
    render() { 
        return (

            <React.Fragment>

              <div className='servicesSection'>
                      <h3 className='hfont'>At Your Service</h3>



                      <div className='marginsides'>
               <div className='row '>

                {this.state.services.map(service=>
                        <div className='col-4 iconmarg' key={service.serviceId}>
                        <img className='serviceimagesize' src={service.serviceImage}  alt='image' />
                        <p className='pfont'>{service.serviceNameL}</p>
                        </div>
                 ) }
            
                 
                  </div>
                  </div>
       



</div>
            </React.Fragment>

          );
    }
}
 
export default ServicesTag;