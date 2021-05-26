import React, { Component } from 'react';

class StudentId extends Component{

    // removeStudent = (i) => {
    //     const {studentData} = this.props;
    //     this.setState({
    //         studentData : studentData.filter((student,index)=> {
    //             return student.id == i.id;
    //         })
    //     })
    // }

    render(){
        const {studentData} = this.props;

        return(
            <>
            {studentData.map((student,index) => {
                const {id, firstName, lastName, dob, collageName, address, image, isShow} = student;
                return(
                    <div key = {index}>
                        <img src={image}/>
                        <p>FirstName : {firstName}</p>
                        <p>LastName : {lastName}</p>
                        <p>Date Of Birth : {dob}</p>
                        {
                            (isShow) ?
                            <div>
                            <p>{collageName}</p>
                            <p>{address}</p>
                            </div>
                            :
                            null
                        }
                        <button onClick={() => {this.props.removeStudent(index)}}>Delete</button>
                        <button onClick={() => {this.props.showAndHideCollageDetails(index)}}>Show/Hide Collage Details</button>
                    </div>
                )
            })}
            </>
        )
    }
}

export default StudentId