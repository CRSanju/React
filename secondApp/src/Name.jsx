import React, { useState } from 'react'

export default function Name() {
    //let user = "Nithin";

   let [user, setName] =  useState("Nithin")
   const change = () => {
     setName(user === "Nithin"? "Sanju" : "Nithin");
   }
  return (
    <div>
       <h1> Hello {user}</h1>
       <button onClick = {change}>Change name</button>
    </div>
  )
}
