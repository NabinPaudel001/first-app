import React, { Component } from "react";

export const Greet = (props) =>{ 
return(
    <div>
        <h1>Hello {props.name} {props.lname}</h1>
        {props.children}
    </div>
)
}
// functional Component