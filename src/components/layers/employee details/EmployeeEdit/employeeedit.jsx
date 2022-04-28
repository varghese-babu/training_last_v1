

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';

import { useGetEmployeeDetailsQuery, useGetEmployeeListQuery, useUpdateEmployeeMutation } from '../../../../api';
import EmployeeHeader2 from "../../header.js  /header2";
function EmployeeEdit(){
    const { id } = useParams()

    const [updateEmployee, { isLoading, isSuccess }] = useUpdateEmployeeMutation();
    const navigate = useNavigate();
const [data,setData] = useState({
  name:"",
  username:"",
  age:"",
  departmentId:"",
  password:"Anto@2160",
  roleId:1,
 isActive:""

})
console.log("data,",data)
const { data: studentData } = useGetEmployeeDetailsQuery(id)


useEffect(() => {
    var dat1={};
    if (studentData) {
        dat1=studentData.data
        // dat1={...dat1,role_id:studentData.data.roleId}

        // const address={
        //    address: studentData.data.address.address,
        //    state: studentData.data.address.state

        // }
        // dat1={...dat1,...address}
        // console.log("studentData",dat1)

      setData(dat1)
    
    }
  }, [studentData]);
 

const handleChange = (e) =>{console.log(e.target.value)
  setData({ ...data, [e.target.name]: e.target.value });console.log(data)}
  

const handleSubmit = async (e) => {
  e.preventDefault();
  const d1= await updateEmployee(data);
  console.log(d1)
console.log("udpdate data",data)
  setData({
    name:"",
  username:"",
  age:"",
  departmentId:"",
  password:"Anto@2160",
  roleId:1,
 isActive:""
//  address:"",
//  state:""
  });

  navigate(-1)
};

    return (
        <div>
 <EmployeeHeader2 title="Edit Employee"/>
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
                    <select name="roleId" value={data.roleId} id="role" onChange={handleChange}>
                    {/* <option disabled selected value> -- select an option -- </option> */}
                        <option value={1} >Admin</option>
                        <option value={2}>Engineer</option>

                    </select>
                  </div>
                  <div class="input-card1">
                    <label for="status">Status</label>
                    <select name="isActive" value={data.isActive} id="status" onChange={handleChange}>
                  
                        <option value='true' >Active</option>
                        <option value='false'>Inactive</option>
                    </select>
                  </div>
                
                  <div class="input-card1">
                    <label for="department">Department</label>
                    <input type="text" id="department" value={data.departmentId} name="departmentId" onChange={handleChange} placeholder="Department"/>
                  </div>
                  {/* <div class="input-card1">
                    <label for="place">Place</label>
                    <input type="text" id="place" value={data.address} name="address" onChange={handleChange} placeholder="Place"/>
                  </div>
                  <div class="input-card1">
                  <label for="state">State</label>
                    <input type="text" id="state"  value={data.state} name="state" onChange={handleChange} placeholder="State"/>
                  </div> */}
                </div>
              </div>

                <div class="btn-container">
                  
                <button onClick={handleSubmit} class="btn btn-primary" id="main-btn">Update</button>
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
export default EmployeeEdit;

