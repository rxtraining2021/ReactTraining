import student from "./Student";
import students from "./Student";

function StudentId(props) {

        const studentData = props.students.map((student, index) => {
            const fullName = student.firstName + ' ' + student.lastName;
            return(
                // <div>
                //     <img src = {student.image} />
                //     <p>{student.firstName}</p>
                //     <p>{student.lastName}</p>
                //     <p>{student.dob}</p>
                //     <p>{student.collegeName}</p>
                //     <p>{student.address}</p>
                //     <img src = {student.collegeLogo} />
                // </div>
                // <div className="card text-white bg-primary mb-3" style={{'max-width': '18rem'}}>
                //     <div className="card-header">
                //         Header
                //     </div>
                //     <div class="card-body">
                //         <h5 className="card-title">Primary card title</h5>
                //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //     </div>
                // </div>
               <div className="col-sm-4" key = {index}>
                   <div className="card" style={{'width': '18rem'}}>
                        <img className="card-img-top" src={student.image} alt="Card image cap" style = {{'height': '215px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{fullName}</h5>
                        <p>Date of Birth : {student.dob}</p>
                        <p>CollegeName : {student.collegeName}</p>
                        <p>Address : {student.address}</p>
                        <img style={{'height': '200px'}} className="card-img-top" src={student.collegeLogo} alt="Card image cap"/>
                    </div>
                    </div>
               </div>

               
            )
        }) 
    return (
        <div className="row container">
            {studentData}
        </div>
    )
}

export default StudentId;