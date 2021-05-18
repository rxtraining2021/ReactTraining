import React, {Component} from 'react';
import sasuke from './Images/sasuke.jpg';

function Image() {
    return(
        <img src={sasuke} />
    )
}

function PersonalInformation(props) {
    const {Id, firstName, lastName, DOB} = props.studentData;
    const fullName = firstName + ' ' + lastName
    return(
        <div>
            <p>ID : {Id}</p>
            <p>Full Name : {fullName}</p>
            <p>DOB : {DOB}</p>
        </div>

    )
}

function CollegeInformation(props) {
    const {collegeName, collegeAddress} = props.collegeData[0];
    return(
        <div>
            <p>College Name : {collegeName}</p>
            <p>Address : {collegeAddress}</p>
        </div>
    )
}

class Student extends Component {
    render() {

        
    const studentData = {
        Id: 1,
        firstName: "Uchiha",
        lastName: "Sasuke",
        DOB: "14/03/1997",
        collegeInformation : [{
            collegeName : "Ninja Academy",
            collegeAddress : "Japan"
        }
        ]
    }

        return(
            <div>
                <h1>Student</h1>
                <Image />
                <PersonalInformation studentData={studentData}/>
                <CollegeInformation collegeData = {studentData.collegeInformation}/>
            </div>
        )
    }
}

export default Student;