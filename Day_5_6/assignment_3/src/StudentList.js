import React from 'react';
import StudentIdCard from './StudentIdCard';
import StudentData from './StudentData';

class StudentList extends React.Component {
    constructor() {
        super()
        this.state = { StudentData };
    }
    handleDelete = id => {
        var StudentData = this.state.StudentData;
        StudentData.splice(id, 1);
        this.setState({ StudentData });
    }

    ShowMore = id => {
        var StudentData = this.state.StudentData;
        StudentData[id].showDetails = !StudentData[id].showDetails;
        this.setState({ StudentData });
        console.log(this.state);
    }

    render() {
        const UpdatedStudentData = this.state.StudentData.map((student, index) => {
            return (
                <StudentIdCard indexcount={index}
                    details={student}
                    handleDelete={this.handleDelete}
                    ShowMore={this.ShowMore}></StudentIdCard>
            )
        })
        return (
            <div>
                {UpdatedStudentData}
            </div>
        )
    }
}

export default StudentList;