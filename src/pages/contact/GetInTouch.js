import React, { Component } from 'react';
class GetInTouch extends Component {
    state = {  }
    render() { 
        return ( 

     <div className='row gitStyle'>
       
       <div className='col gitCols'> 
       <h2>Get in Touch</h2>

         <p>Assotech Business Cresterra, 905, Tower-2, Sector-135,</p>

         <p> Noida(U.P)-201301, India</p>

          <p>info@codeblock.co.in</p>

          <p>+91 844-894-5528</p>

       </div>
       <div className='col'>

       <form >
        <ul >
        <li   ><label  >Name *</label> <div   ><input id="field1" required=""  name="Name"  placeholder="Name *"  value="" type="text" /></div>
        </li>

        <li ><label >Email *</label><div ><input id="field2" required=""  name="Email"  placeholder="Email *"  value="" type="text" /></div></li>
        <li ><label >Phone</label><div ><input id="field3"  name="Phone" placeholder="Phone"  value="" type="tel" /></div></li>
        <li ><label >Message</label><div ><textarea name="Message"  placeholder="Message" data-aid="messageField" id="comp-js44u14o6fieldMessage"></textarea></div></li>
        <div ><span  id="comp-js44u14o6notifications"></span><button type="submit" id="comp-js44u14o6submit" >Send</button></div>
       

        </ul>
        </form>

       

       </div>
    </div>

         );
    }
}
 
export default GetInTouch;