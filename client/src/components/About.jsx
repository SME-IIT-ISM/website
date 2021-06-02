import React, { useState } from 'react';
class About extends Component {
    state = {  }
    render() { 
        var myStyle={
            width:"100vw",
            height:"60vh",
           backgroundColor:"#6d6d83",
           position : "relative", 
           textAlign: "center"
           
             
            
   
       };
       var imageStyle={
           width:"90vw",
           height:"65vh",
           color:"linearGradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
           
       };
       var centered={
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        
       };
        return ( <div>
            <Header/>
            <div  style={myStyle}>
            
                <img  className="mx-auto d-block" style={imageStyle} src="https://source.unsplash.com/collection/190727/1600x900" alt=""></img>
                
                 {/* <div ><p className="text-center fs-1 fw-bold text-decoration-underline " style={ headingStyle}>About</p></div>  */}
                 <div className=" text-white fs-1 fw-bolder text-decoration-underline " style={centered}>About Us</div>
            </div>
           
        </div> );
    }
}
 
export default About;