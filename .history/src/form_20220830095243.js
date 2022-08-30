import React from "react";

const Form =(props)=>{

    



    const handleChange = evt =>{
    const {name, value} = evt.target;

     props.onChange(name, value)
}

const handleSubmit = event => {
    event.preventDefault();
    props.submit();
}


  return (
    <form onSubmit={handleSubmit}>
      <label>Name
      <input
      placeholder="Enter name here"
      name="name"
      value={props.values.name}
      onChange ={handleChange}
     />  
     </label>
     <label>Email
     <input
      placeholder="Enter email here"
      name="email"
      value={props.values.email}
      onChange ={handleChange}
     /> 
     </label>
     <label>Role
     <input
      placeholder="---Select---"
      name="role"
      value={props.values.role}
      onChange = {handleChange}
     />
     </label>
     <input type="submit" value= "Create your team!"/>
    </form>
  )
}
export default Form;