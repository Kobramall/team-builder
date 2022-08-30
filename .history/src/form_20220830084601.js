import React, {useState} from "react";

function Form(props){




  return (
    <form>
      <input
      name="name"
      type="text"
      value=""
      onChange ={onChange}/>  
    </form>
  )
}