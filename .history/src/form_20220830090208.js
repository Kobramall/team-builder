import React, {useState} from "react";

export default function Form(props){
const [name, setName] = useState("")
const [email, setEmail] = useState("")



    const change = (evt) =>{
    const {name, value} = evt.target
}


  return (
    <form>
      <label>Name</label>
      <input
      placeholder="Enter name here"
      name="name"
      type="text"
      value={values.name}
      onChange ={change}
     />  
     <label>Email</label>
     <input
      name="email"
      type="text"
      value={values.email}
      onChange ={change}
     /> 
     <label>Role</label>
     <input
      placeholder="---Select---"
      name="role"
      type="text"
      value={values.role}
     />
    </form>
  )
}