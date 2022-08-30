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