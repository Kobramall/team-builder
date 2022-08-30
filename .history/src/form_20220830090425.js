import React, {useState} from "react";

export default function Form(props){
const [name, setName] = useState("")
const [email, setEmail] = useState("")



    const change = (evt) =>{
    const {name, value} = evt.target
}


  return (
    <form>
      <label>Name
      <input
      placeholder="Enter name here"
      name="name"
      type="text"
      value={values.name}
      onChange ={change}
     />  
     </label>
     <label>Email
     <input
      name="email"
      type="text"
      value={values.email}
      onChange ={change}
     /> 
     </label>
     <label>Role
     <input
      placeholder="---Select---"
      name="role"
      type="text"
      value={values.role}
      onChange = {change}
     />
     </label>
     <input type="submit" value= "Create your team!"/>
    </form>
  )
}