var StudentImageC = (props) => {
    return (
        <div>
            <h3>Image</h3>
            <img src={props.iData.details.ImagePic} height="100px" width="100px" alt="Niraj" border="0" />
        </div>
    )
}

var PersonalC = (props) => {
    return (
        <div class="Abc">
            <h3>Student Personal info</h3>
            <p>StudentID : {props.pdata.details.StudentID}</p>
            <p>First Name : {props.pdata.details.Firstname}</p>
            <p>Last Name : {props.pdata.details.LastName}</p>
            <p><b>Full Name</b> : {props.pdata.details.Firstname} {props.pdata.details.LastName}</p>
            <p>DOB : {props.pdata.details.DOB}</p>
        </div>
    )
}

var CollegeC = (props) => {
    return (
        <div>
            <h3>Student College Info</h3>
            <p>College Name : {props.cdata.details.CollegeName}</p>
            <p>College Address : {props.cdata.details.CollegeAddress}</p>
            <p>College Logo : <img src="https://i.ibb.co/XFqn1Py/Image-2.jpg" height="30px" alt="Image-2" border="0" /></p>
        </div>
    )
}

function StudentidCard(props) {
    var details = props;
    return (
        <div>
            <p>{props.children}</p>
            <StudentImageC iData={details}></StudentImageC>
            <PersonalC pdata={details}></PersonalC>
            <CollegeC cdata={details}></CollegeC>
        </div>
    );
}

export default StudentidCard;