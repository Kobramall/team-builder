import React, {useState} from "react";

export default function Form(props){




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