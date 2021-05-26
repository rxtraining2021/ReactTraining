import React, { Component } from 'react'

export default class StudentIdCard extends Component {
    render() {
        return (
            <div>
                <img src={this.props.studentsData.image}></img>
                <p>Student First Name is {this.props.studentsData.FName}</p>
                <p>Student Last Name is {this.props.studentsData.LName}</p>
                <p>Student Date of Birth is {this.props.studentsData.DOB}</p>
            </div>
        )
    }
}
