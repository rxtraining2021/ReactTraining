import React, { Component } from 'react'
import student from '../Student'
import StudentIdCard from './StudentIdCard'

export default class StudentList extends Component {

    constructor(){
        super()
        this.state={
            students:student
        }
    }

    render() {
        console.log(this.state.students)
        return (
            <div>
                {this.state.students.map(studentData=><StudentIdCard studentsData={studentData}></StudentIdCard>)}

                {/* <StudentIdCard studentData={this.state.students}></StudentIdCard> */}
            </div>
        )
    }
}
