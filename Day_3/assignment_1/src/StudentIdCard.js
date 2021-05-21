import React from 'react';

class StudentIdCard extends React.Component {
    constructor(props) {
        super()
        var Info = props.details;
        this.state = { Info };
    }

    render() {
        
        const studentData = this.state.Info.map((student, index) => {
            const fullName = student.Firstname + ' ' + student.LastName;
            return (
                <div style={{ 'width': '25rem' }}>
                    <img src={student.ImagePic} alt="Image" style={{ 'height': '200px', width: 'auto' }} />
                    <div>
                        <h3>{fullName}</h3>
                        <p>Student ID : {student.StudentID}</p>
                        <p>First Name : {student.Firstname}</p>
                        <p>Last Name : {student.LastName}</p>
                        <p>Date of Birth : {student.DOB}</p>
                        <p>College Name : {student.CollegeName}</p>
                        <p>College Address : {student.CollegeAddress}</p>
                        <p>College Logo : <img src="https://i.ibb.co/XFqn1Py/Image-2.jpg" height="30px" alt="Image-2" border="0" /></p>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {studentData}
            </div>
        )
    }
}

export default StudentIdCard;