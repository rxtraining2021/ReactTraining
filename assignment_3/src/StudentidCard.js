var StudentInfo = {
    StudentID: "1", Firstname: "Niraj", LastName: "Rathod", DOB: "24/08/1993",
    CollegeName: "GEC Modasa", CollegeAddress: "Modasa"
}

var StudentImageC = () => {
    return (
        <div>
            <h3>Student Image</h3>
            <img src="https://i.ibb.co/5TG2RWT/Niraj.png" height="100px" alt="Niraj" border="0" />
        </div>
    )
}

var PersonalC = () => {

    return (
        <div class="Abc">
            <h3>Student personal info</h3>
            <p>StudentID : {StudentInfo.StudentID}</p>
            <p>First Name : {StudentInfo.Firstname}</p>
            <p>Last Name : {StudentInfo.LastName}</p>
            <p>DOB : {StudentInfo.DOB}</p>
        </div>
    )
}

var CollegeC = () => {
    return (
        <div>
            <h3>Student College Info</h3>
            <p>College Name : {StudentInfo.CollegeName}</p>
            <p>College Address : {StudentInfo.CollegeAddress}</p>
            <p>College Logo : <img src="https://i.ibb.co/XFqn1Py/Image-2.jpg" height="30px" alt="Image-2" border="0" /></p>
        </div>
    )
}

function StudentidCard() {
    return (
        <div>
            <StudentImageC></StudentImageC>
            <PersonalC></PersonalC>
            <h3>Full Name Display</h3>
            <p>Full Name : {StudentInfo.Firstname} {StudentInfo.LastName} </p>
            <CollegeC></CollegeC>
        </div>
    );
}

export default StudentidCard;