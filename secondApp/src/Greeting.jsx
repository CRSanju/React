import React from 'react'


export default function Greeting(props) {
	return (
        <div>
            <h3>Good Morning {props.name} </h3>
            <h3>The age is {props.age} </h3>
        </div>
    )
}