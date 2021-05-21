import React, { Component } from 'react'

//var details=[{collegeName:'IIT Bombay',CollegeAdd :'Pawai,Mumbai'},{collegeName:'DTU',CollegeAdd :'Delhi'}]

export default class College extends Component {
    render() {
        return (
            <div>
               <h1>College Details</h1> 
               {/* <p1>College Name is {details[0].collegeName} </p1><br/>
               <p1>College Address is {details[0].CollegeAdd} </p1><br/> */}
               <p1>College Name is {this.props.data.collegeName} </p1><br/>
               <p1>College Address is {this.props.data.CollegeAdd} </p1><br/>
            </div>
        )
    }
}
