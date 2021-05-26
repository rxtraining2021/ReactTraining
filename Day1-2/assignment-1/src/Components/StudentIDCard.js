import React, { Component, Children } from 'react'
import Personal from './Personal'
import College from './College'
import studentData  from '../StudentList';

export default class StudentIDCard extends Component {
    render() {
        return (
            <div>
              {this.props.children}
              {/* <Personal details={studentData.personalDetails[0]}/>
              <Personal details={studentData.personalDetails[1]}/>
              <Personal details={studentData.personalDetails[2]}/> */}
              <h2>Person Details</h2> 
              {studentData.personalDetails.map(detail=>
                <Personal key={detail.ID} details={detail}></Personal>)}
               
               <h2>College Details</h2> 
              <College data={studentData.collegeDetails[0]}/> 
            </div>
        )
    }
}
