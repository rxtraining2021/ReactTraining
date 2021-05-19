var StudentImageC = () => {
    return (
        <div>
            <h3>Student Image</h3>
            {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/5TG2RWT/Niraj.png" alt="Niraj" border="0" /></a> */}
            <img src="https://i.ibb.co/5TG2RWT/Niraj.png" height="100px" alt="Niraj" border="0" />
        </div>
    )
}

var PersonalC = () => {
    return (
        <div class="Abc">
            <h3>Student personal info</h3>
            <p> StudentID : 1</p>
            <p>First Name : Niraj</p>
            <p>Last Name : Rathod</p>
            <p>DOB : 24/08/1993</p>
        </div>
    )
}

var CollegeC = () => {
    return (
        <div>
            <h3>Student College Info</h3>
            <p>College Name : GEC Modasa</p>
            <p>College Address : Modasa</p>
            <p>College Logo : <img src="https://i.ibb.co/XFqn1Py/Image-2.jpg" height="30px" alt="Image-2" border="0" /></p>
        </div>
    )
}

function StudentidCard() {
    return (
        <div>
            <StudentImageC></StudentImageC>
            <PersonalC></PersonalC>
            <CollegeC></CollegeC>
        </div>
    );
}

export default StudentidCard;