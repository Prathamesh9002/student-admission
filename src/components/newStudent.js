import React, { useState } from 'react';
import axios from 'axios';

export default function CreateNewStudentAccount(){

    const [student, setStudent] = useState({
       studentName : '',
       sscMarks : '',
       hscMarks : '',
       address : '',
       contact : '',
       cetMarks : '' 
    });

    function handleChange(event){
        const{name, value} = event.target;
        setStudent(prevValue => {
            return {
                ...prevValue,
                [name] : value
            };
        });
    }

    function onSubmit(e){
        axios.post('http://localhost:4000/todos/add', student)
        .then(res => console.log(res.data))
        e.preventDefault();
        alert("Student Added Successfully.");
    }

    return (
        <div style={{"marginTop":"6%"}} >
                <h4>Create New Student Account</h4>
                <form onSubmit={onSubmit}>
                    <div className="form-group col-lg-5" >
                        <label style={{"textAlign":"right", "clear":"both", "marginTop":"4%","display":"inline-block"}}>Name : 
                        <input type="text" 
                               name="custName" 
                               className="form-control"
                               value={student.studentName}
                               onChange={handleChange}
                               style={{"marginTop":"-12%","marginLeft":"115%"}}
                        />
                        </label>
                    </div>
                    <div className="form-group col-lg-5" >    
                        <label style={{"textAlign":"right", "clear":"both","display":"inline-block", "marginTop":"4%"}}>Contact : 
                        <input type="number"
                               name="contact" 
                               className="form-control"
                               value={student.contact}
                               onChange={handleChange}
                               pattern={"[1-9]{1}[0-9]{9}"}
                               style={{"marginTop":"-12%","marginLeft":"115%"}}
                        />
                        </label>
                    </div>
                    <br/>
                    <div className="form-group col-lg-5" >
                        <label style={{"textAlign":"right", "clear":"both","display":"inline-block", "marginTop":"1%"}}>SSC Marks : 
                        <input type="number"
                               name="adhaar" 
                               className="form-control"
                               value={student.sscMarks}
                               onChange={handleChange}
                               style={{"marginTop":"-12%","marginLeft":"115%"}}
                        />
                        </label>
                    </div>
                    <div className="form-group col-lg-5" >
                        <label style={{"textAlign":"right", "clear":"both","display":"inline-block", "marginTop":"4%"}}>HSC Marks : 
                        <input type="number"
                               name="adhaar" 
                               className="form-control"
                               value={student.sscMarks}
                               onChange={handleChange}
                               style={{"marginTop":"-12%","marginLeft":"115%"}}
                        />
                        </label>
                    </div>
                    <br/>
                    <div className="form-group col-lg-5" >
                        <label style={{"textAlign":"right", "clear":"both","display":"inline-block","marginTop":"1%"}}>Address : 
                        <textarea type="text" 
                               name="address" 
                               className="form-control"
                               value={student.address}
                               onChange={handleChange}
                               style={{"marginTop":"-12%","marginLeft":"111%"}}
                        />
                        </label>
                    </div>
                    <div className="form-group col-lg-5" style={{"marginTop" : "3%", "marginLeft" : "10%"}}>
                        <button type="Submit" value="Submit" className="btn btn-primary">Submit</button>
                    </div>
                    
                </form>   
            </div> 
    );
}