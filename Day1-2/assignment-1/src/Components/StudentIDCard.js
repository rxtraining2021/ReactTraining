import React, { Component, Children } from 'react'
import Personal from './Personal'
import College from './College'


var student={collegeDetails:[{collegeName:'IIT Bombay',CollegeAdd :'Pawai,Mumbai'},
                             {collegeName:'DTU',CollegeAdd :'Delhi'},
                             {collegeName:'IIM',CollegeAdd :'Ahmedabad'} ],


                             personalDetails:[{ID:1,FName:'Yash',LName:'Mehta',DOB:'06/07/1998'},
                             {ID:2,FName:'Deep',LName:'Shah',DOB:'01/01/2000'},
                             {ID:3,FName:'Sam',LName:'Patel',DOB:'07/07/1998'}]}
                             //{ID:4,FName:'Yash',LName:'Mehta',DOB:'06/07/1998'}]}

export default class StudentIDCard extends Component {
    render() {
        //console.log(student.personalDetails)
        return (
            <div>
              {this.props.children}
              <Personal details={student.personalDetails[0]}/>
              <Personal details={student.personalDetails[1]}/>
              <Personal details={student.personalDetails[2]}/>
              <College data={student.collegeDetails[0]}/> 
            </div>
        )
    }
}
