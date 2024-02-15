import { Routes, Route, useNavigate } from 'react-router-dom';
import Employee from './employee';
import React, { Component, useEffect, useState} from 'react';


//class Table extends Component {
const Table = () => {
    const [x, setX] = useState(
        [{ demo: 'Testing', country:'india', id:'01'},
       {demo: 'Tester', country:'Us', id:'02'}])
    // this.state ={
    //     x:'demo'
    // }
    const [, setRecords] = useState(0)
   const [F, setY] = useState(0)
   const  data = [
        {
            name: "Akram",
            age: 21,
            gender: "Male",
            Roll_Number: "2019meb1235",
        },
        {
            name: "Michael",
            age: 22,
            gender: "FeMale",
            Roll_Number: "2019csb1225",
        },
        { name: "Manisha", age: 22, gender: "Female", Roll_Number: "2018meb1236" },
        { name: "Tanishq", age: 21, gender: "Male", Roll_Number: "2018eeb1190" },
        { name: "Stark", age: 19, gender: "Female", Roll_Number: "2019csb1212" },
    ]
     const navigate = useNavigate();
  
 const handleClick = () => {
        setY(F + 1);
        // navigate('/employee');
    }

    useEffect(function(){
        console.log('a')
        let employeedata = [];
        fetch('https://dummy.restapiexample.com/api/v1/employees')
        .then(response => response.json())
        .then(json => {
                console.log(json);
                employeedata = json.data
            }
                )},[]
    )

    // state = {
    //     count :'Testing'
    // }
   // render(){
    return (
       
        <div className="Table">
           
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, key) => {
                        return (
                            <tr key={key}>
                                <td>{value.name}   Count:{F}</td>
                                <td>{value.age}</td>
                                <td>{value.gender}</td>
                                <td><button onClick={handleClick}>Next</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* //parent to child Component */}
            <div className='' >
                    <h1>parent component : {x.demo}</h1>
                    <Employee name={x} />
            </div>

            {/* <div>{employeedata}</div> */}
        </div>

    )
}
//}
// class Table extends React.Component {

// }

export default Table;
