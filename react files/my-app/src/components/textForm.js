import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
        <input type="password" className="form-control" id="textForm"></input>
    </div>
  )
}