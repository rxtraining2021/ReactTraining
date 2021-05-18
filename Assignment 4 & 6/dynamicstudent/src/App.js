import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React, {Component} from 'react';



class App extends Component {

  render(){
    const studentOneData = [
      {
      id: 1,
      firstName: "Uchiha",
      lastName: "Sasuke",
      dob: "14/03/1997",
      collegeInformation: {
        collageName : "Ninja Academy",
        address : "Japan"
      }
    }
  ]

  const studentTwoData = [
    {
    id: 2,
    firstName: "Naruto",
    lastName: "Uzumaki",
    dob: "14/03/1997",
    collegeInformation: {
      collageName : "Ninja Academy",
      address : "Japan"
    }
  }
]

const studentThreeData = [
  {
  id: 3,
  firstName: "Sakura",
  lastName: "Haruno",
  dob: "14/03/1997",
  collegeInformation: {
    collageName : "Ninja Academy",
    address : "Japan"
  }
}
]
  
    return (
      <div className="App">
        <p>Student Details</p>
        <Student studentData={studentOneData} /> <p>Student Details</p>
        <Student studentData={studentTwoData} /><p>Student Details</p>
        <Student studentData={studentThreeData} />
      </div>
    );
  }
}

// function App(){
//   const studentOneData = [
//           {
//           id: 1,
//           firstName: "Uchiha",
//           lastName: "Sasuke",
//           dob: "14/03/1997",
//           collegeInformation: {
//             collageName : "Ninja Academy",
//             address : "Japan"
//           }
//         }
//       ]
    
//       const studentTwoData = [
//         {
//         id: 1,
//         firstName: "Naruto",
//         lastName: "Uzumaki",
//         dob: "14/03/1997",
//         collegeInformation: {
//           collageName : "Ninja Academy",
//           address : "Japan"
//         }
//       }
//     ]

//     return (
//             <div className="App">
//               <Student studentData={studentOneData} />
//               <Student studentData={studentTwoData} />
//             </div>
//           );
// }

export default App;