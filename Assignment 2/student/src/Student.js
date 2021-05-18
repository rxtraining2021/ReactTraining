import React, {Component} from 'react';
import sasuke from './Images/sasuke.jpg';
import ninjaacademy from './Images/ninjaacademy.jpg';

//for Image
function Image() {
    return (
        <img src= {sasuke} />
    )
}

//for Personal Information
function PersonalInformation(){
    return(
        <div>
            <p>ID : 1</p>
            <p>FirstName : Sasuke</p>
            <p>LastName : Uchiha</p>
            <p>DOB : 14/03/1997</p>
        </div>
    )
}

function  CollegeInformation() {
    return(
        <div>
            <p>College Name : Ninja Academy</p>
            <p>Address : Japan</p>
            <img src= {ninjaacademy} />
        </div>
    )
}

class Student extends Component {
    render(){
        return(
            <div>
                <h1>Student</h1>
                <Image />
                <PersonalInformation />
                <CollegeInformation />
            </div>
        )
    }
}

export default Student;