import React, {Component} from 'react';

function PersonalInformation(props){

    const {id, firstName, lastName, dob} = props.studentData;

    return(
        <div>
            <p>Id : {id}</p>
            <p>First Name : {firstName}</p>
            <p>Last Name : {lastName}</p>
            <p>DOB : {dob}</p>
        </div>
    )
}

function CollageInformationData(props) {
    const {collageName, address} = props.studentData

    return(
        <div>
            <p>Collage Name : {collageName}</p>
            <p>Address : {address}</p>
        </div>
    )
}

class Student extends Component {
    render(){
        const {studentData} = this.props

        return(
            <div>
                <p>{this.props.children}</p>
                <PersonalInformation studentData={studentData[0]}/>
                <CollageInformationData studentData = {studentData[0].collegeInformation} />
                <hr></hr>
            </div>
        )
    }
}


export default Student;