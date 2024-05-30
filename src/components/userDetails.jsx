import React from "react";
import { useState } from "react";

function UserDetails(  {user,setUsers}  ) {
  const [IsEditing, setIsEditing] = useState(false)
// console.log (IsEditing);
const [username, setUsername]=useState(user.username)
const [email, setEmail]=useState(user.email)

  return (

    <div>

      <div>
        <b>Id:</b> &nbsp;
        <span>{user.id}</span>&nbsp; <br />
        <b>Name:</b>&nbsp;
        {IsEditing ? <input name="username" id="username" value={username} onChange={(event)=>{setUsername(event.target.value)}} /> : <span> {user.username}</span>}&nbsp;<br />&nbsp;<br />
        <b>Email:</b>&nbsp;
        {IsEditing ? <input name="email" id="email" value={email}  type="email" onChange={(event)=>{setEmail(event.target.value)}} /> : <span> {user.email}</span>}&nbsp;<br />&nbsp;<br />
      </div>

      <div>

        <button onClick={()=>{
          setIsEditing((currentState)=>!currentState)
        }}>Edit</button>

        <button onClick={()=>{setUsers ((currentUsersState)=>currentUsersState.filter((currentUser) => currentUser.id !== user.id)) 
        
        }
        }
        >Delete</button>

        {IsEditing && (<button onClick={()=>{
          setUsers((currentUsersState)=>{
            return currentUsersState.map((currentUser)=>{
              if (currentUser.id===user.id)
                return{...currentUser,username,email};
              else return {username,email};
            })
          })
          setIsEditing(false);
        }} >Save</button>)}
      

      </div>

    </div>
  );
}

export default UserDetails;
