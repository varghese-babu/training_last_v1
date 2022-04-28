
import { useParams } from "react-router-dom";
import './departmentdetails.css'
import { useGetEmployeeDetailsQuery } from "../../../api";
import BlockLoading from "../../loading/loader1/loader1";

function DepartmentDetails (props){
    const { id } = useParams()
    console.log(id)
    const {data,error,isLoading}=useGetEmployeeDetailsQuery('698a31f1-6a00-42a8-a104-af210578e8c1')
    console.log(data,error,isLoading)
    
    return (
       <div>
            {isLoading ? <div style={{justifyContent:"center",alignItems:"center"}}><BlockLoading/></div>:<div class="input-box-container">
            <div  class="input-card">
            <h5 className="title">Employee ID</h5>
            <h6 className="subtitle">{data.data.id}</h6>
            </div>
            <div  class="input-card">
            <h5 className="title">Employee Name</h5>
            <h6 className="subtitle">{data.data.name}</h6>
            </div>
            <div  class="input-card">
            <h5 className="title">Employee Username</h5>
            <h6 className="subtitle">{data.data.username}</h6>
            </div>
            {/* <div  class="input-card">
            <h5 className="title">Address</h5>
            <h6 className="subtitle">{data.data.address}</h6>
            </div> */}
            <div  class="input-card">
            <h5 className="title">Active</h5>
            <h6 className="subtitle">{data.data.isActive?"Active":"InActive"}</h6>
            </div>
            {/* <div  class="input-card status">
            <h5 className="title">Age</h5>
            <h6 className="subtitle">{data.status}</h6>
            </div> */}
            {/* <div  class="input-card">
            <h5 className="title">Experience</h5>
            <h6 className="subtitle">{data.experience}</h6>
            </div>
            <div  class="input-card">
            <h5 className="title">Address</h5>
            <h6 className="subtitle">{data.address}</h6>
            </div> */}
            <div  class="input-card">
            <h5 className="title">Employee ID proof</h5>
            <button className='idfile'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-medical-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0zm-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
</svg></button>
            </div>
        </div>}
       </div>
    );
}

export default DepartmentDetails;