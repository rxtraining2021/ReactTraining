import React, { Component } from 'react'


//var details=[{ID:1,FName:'Yash',LName:'Mehta',DOB:'06/07/1998'},{ID:2,FName:'Deep',LName:'Mehta',DOB:'09/09/2000'}]

// export default class Personal extends Component {
//     render() {
//         return (
//             <div>
//                <h1>Person Details</h1> 
//                <p1>ID is {details[0].ID} </p1><br/>
//                <p1>FirstName is {details[0].FName} </p1><br/>
//                <p1>LastName is {details[0].LName} </p1><br/>
//                <p1>Date of Birth is {details[0].DOB} </p1><br/>
//             </div>
//         )
//     }
// }

export default function Personal(props) {
    return (
        <div>
            
            {/* <p1>ID is {details[0].ID} </p1><br/>
            <p1>FirstName is {details[0].FName} </p1><br/>
            <p1>LastName is {details[0].LName} </p1><br/>
            <p1>Date of Birth is {details[0].DOB} </p1><br/> */}
            {/* <p1>ID is {props.details1.ID} </p1><br/>
            <p1>FirstName is {props.details1.FName} </p1><br/>
            <p1>LastName is {props.details1.LName} </p1><br/>
            <p1>Date of Birth is {props.details1.DOB} </p1><br/> */}
            <img src={props.details.image}></img><br/>
            <p1>ID is {props.details.ID} </p1><br/>
            <p1>FirstName is {props.details.FName} </p1><br/>
            <p1>LastName is {props.details.LName} </p1><br/>
            <p1>Date of Birth is {props.details.DOB} </p1><br/> 
        </div>
    )
}

