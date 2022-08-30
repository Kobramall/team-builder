import React, {useState} from "react";

export default function Form(props){
const [name, setName] = useState("")
const [email, setEmail] = useState("")



    const handleChange = (evt) =>{
    const {name, value} = evt.target

     props.change(name, value)
}


  return (
    <form>
      <label>Name
      <input
      placeholder="Enter name here"
      name="name"
      type="text"
      value={values.name}
      onChange ={handleChange}
     />  
     </label>
     <label>Email
     <input
      name="email"
      type="text"
      value={values.email}
      onChange ={handleChange}
     /> 
     </label>
     <label>Role
     <input
      placeholder="---Select---"
      name="role"
      type="text"
      value={values.role}
      onChange = {handleChange}
     />
     </label>
     <input type="submit" value= "Create your team!"/>
    </form>
  )
}