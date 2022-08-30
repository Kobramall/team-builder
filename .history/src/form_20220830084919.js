import React, {useState} from "react";

export default function Form(props){




  return (
    <form>
      <label>name</label>
      <input
      name="name"
      type="text"
      value=""
     />  
     <label>Email</label>
     <input
      name="email"
      type="text"
      value=""
     /> 
     <label>Role</label>
     <input
      name="role"
      type="text"
      value=""
     />
    </form>
  )
}