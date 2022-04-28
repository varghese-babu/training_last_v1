
import EmployeeHeader from '../header.js  /header';
import EmployeeHeader2 from '../header.js  /header2';
import EmployeeDetails from './employeedetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import './createemployee.css'
import { useState } from 'react';
import { useAddEmployeeMutation, useGetEmployeeListQuery } from '../../../api';
function EmployeeCreate(){
   
    const navigate = useNavigate();
    const [addEmployee, { isLoading, isSuccess }] = useAddEmployeeMutation();
const [data,setData] = useState({
  name:"",
  username:"",
  age:"",
  departmentId:"",
  password:"password",
 roleId:"",
 addressId:"",
})



const handleChange = (e) =>{
  setData({ ...data, [e.target.name]: e.target.value });}

const handleSubmit = async (e) => {
  e.preventDefault();
  await addEmployee(data);

  setData({
    name:"",
  username:"",
  age:"",
  departmentId:"",
 roleId:"",
 address:"",
 isActive:""
  });

  navigate(-1)
};

    return (
        <div>
 <EmployeeHeader2 title="Create Employee"/>
 <div className='createEmployee'>
            <div  id="myfrm">
                <div class="form-input-box-container">
                  <div class="input-card1">
                    <label for="name">Employee Name</label>
                    {/* <input type="text" id="name" name="empname" placeholder="Employee Name"> */}
                    <input type="text" value={data.name} name="name" onChange={handleChange}  placeholder='Employee Name' />
                  </div>
                  <div class="input-card1">
                    <label for="id">Employee username</label>
                    <input  type="text" name="username" value={data.username}  onChange={handleChange} id="id" placeholder="Employee ID"/>
                  </div>
                  <div class="input-card1">
                    <label for="join">Age</label>
                    <input type="number" id="join" value={data.age} name="age" onChange={handleChange} placeholder="Joining Date"/>
                  </div>
                  <div class="input-card1">
                    <label for="role">Role</label>
                    <select name="roleId" id="role" onChange={handleChange}>
                    <option disabled selected value> -- select an option -- </option>
                        <option value="1" >Admin</option>
                        <option value="2">Engineer</option>
                    </select>
                  </div>
                  {/* <div class="input-card1">
                    <label for="status">Status</label>
                    <select name="" id="status" >
                    <option disabled selected value> -- select an option -- </option>
                        <option value="Active" >Active</option>
                        <option value="">Inactive</option>
                    </select>
                  </div>
                  <div class="input-card1">
                    <label for="exp">Experience</label>
                    <input type="text" id="exp" name="exp" placeholder="Experience"/>
                  </div>*/}
                  <div class="input-card1"> 
                    <label for="department">Department</label>
                    <input type="text" id="department" value={data.departmentId} name="departmentId" onChange={handleChange} placeholder="Department"/>
                  </div>
                  <div class="input-card1">
                    <label for="place">Place</label>
                    <input type="text" id="place" value={data.addressName} name="address" onChange={handleChange} placeholder="Place"/>
                  </div>
                  
                </div>
              </div>

                <div class="btn-container">
                  
                <button onClick={handleSubmit} class="btn btn-primary" id="main-btn">Create</button>
                  <button onClick={()=>{navigate(-1)}} class="btn btn-secondary">Cancel</button>
                
                </div>
              
        </div>
        
        </div>
       
    )
}
// export const AddEmployee=(props)=>{
//   const navigate = useNavigate();

//   const [addEmployee]=useAddEmployeeMutation()
//   const {refetch} = useGetEmployeeListQuery()
// console.log(props.state)
//   const addHandler=async ()=>{
//     await addEmployee(props.state);
//     refetch()
//     navigate(-1)
//   }
  
//   return (
    
//   );
// }
export default EmployeeCreate;

