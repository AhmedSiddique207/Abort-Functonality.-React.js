import React from "react";
import { useState } from "react";


function Register() {


    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [DisplayName, setDisplayName] = useState("");
    // const isDissabled = !username || !password || !DisplayName;


    const [formFields, setformFields]=useState({
        username:"",
        password:"",
        DisplayName:"",
    });
    // console.log(formFields);


    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(formFields.username);
        console.log(formFields.password);
        console.log(formFields.DisplayName);
    }
    



    return(

<form onSubmit={(event)=>handleSubmit(event)} >
    <div>
        <label htmlFor="UserName">UserName</label>
        <br />
        <input id="username" placeholder="UserName" value={formFields.username} onChange={(event)=>
          {
            setformFields((currentState)=>({
                ...currentState,
                username:event.target.value
            }));
          }
        } />
        </div>

        <div>
        <label htmlFor="Password">Password</label>
        <br />
        <input id="Password" type="Password" placeholder="password"  value={formFields.password} onChange={(event)=>
           {
            setformFields((currentState)=>({
                ...currentState,
                password:event.target.value
            }));
           }        } />
        </div>

        <div>
        <label htmlFor="Display Name">Display Name</label>
        <br />
        <input id="DisplayName" placeholder="Display Name" value={formFields.DisplayName} onChange={(event)=>
           {
            setformFields((currentState)=>({
                ...currentState,
            DisplayName:event.target.value
            }));
           }
        }  />
        </div>
        <div>
            <br />
            {/* <button disabled ={isDissabled}>Signup</button> */}

            <button
            //  onSubmit={formFields.value}
               >Submit</button>
        </div>

        <div> <br />
            <span>
                Username: {formFields.username}
                <br />
                Password: {formFields.password}
                <br />
                DisplayName: {formFields.DisplayName}
            </span>
        </div>

</form>

    );

}
export default Register;