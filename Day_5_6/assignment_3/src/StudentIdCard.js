import React, { Component } from 'react';

export default class StudentIdCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { handleDelete, ShowMore } = this.props;
        const indexcount = this.props.indexcount;
        const student = this.props.details;
        const fullName = student.Firstname + ' ' + student.LastName;
        return (
            <div style={{ 'width': '45rem' }}>
                <div className="row">
                    <div className="col-sm-4">
                        <img src={student.ImagePic} alt="Image" style={{ 'height': '200px', width: '200px' }} />
                        <div style={{ marginTop: '22px', marginBottom: '22px' }}>
                            <button className="btn btn-primary" onClick={() => ShowMore(indexcount)}>
                                {student.showDetails ? "Show Less" : "Show More"}</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(indexcount, fullName)}>Delete</button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <h3>{fullName}</h3>
                        <p>Student ID : {student.StudentID}</p>
                        <p>First Name : {student.Firstname}</p>
                        <p>Last Name : {student.LastName}</p>
                        <p>Date of Birth : {student.DOB}</p>
                    </div>
                    <div className="col-sm-4">
                        {student.showDetails ? (
                            <div>
                                <h3>College Details</h3>
                                <p>College Name : {student.CollegeName}</p>
                                <p>College Address : {student.CollegeAddress}</p>
                                <p>College Logo : <img src="https://i.ibb.co/XFqn1Py/Image-2.jpg" height="30px" alt="Image-2" border="0" /></p>
                            </div>) : null}
                    </div>
                </div>
            </div>
        )
    }
}

