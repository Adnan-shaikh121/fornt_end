import React from "react";
import { Todo } from "./Todo";

export function Todos(props){
    return (
        <div className="conatiner text-center">
            <h1 className="my-4">Todo List</h1>
            <Todo/>

        </div>
    )
}