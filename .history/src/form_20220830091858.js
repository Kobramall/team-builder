import React, {useState} from "react";

export default function Form(props){

    



    const handleChange = (evt) =>{
    const {name, value} = evt.target

     props.change(name, value)
}

const handleSubmit = event => {
    event.preventDefault();
    props.submit();
}


  return (
    <form onSubmit={(handleSubmit)}>
      <label>Name
      <input
      placeholder="Enter name here"
      name="name"
      type="text"
      value={props.values.name}
      onChange ={handleChange}
     />  
     </label>
     <label>Email
     <input
      name="email"
      type="text"
      value={props.values.email}
      onChange ={handleChange}
     /> 
     </label>
     <label>Role
     <input
      placeholder="---Select---"
      name="role"
      type="text"
      value={props.vaules.role}
      onChange = {handleChange}
     />
     </label>
     <input type="submit" value= "Create your team!"/>
    </form>
  )
}