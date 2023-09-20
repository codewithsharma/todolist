"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);
  const SubmitHandler = (e) => {
    e.preventDefault();
    setTodo([...todo, { title, description }]);
    setTitle("");
    setDescription("");

    console.log(todo);
  };
  const deleteHandler =(i)=>{
    console.log("clicked")
    let copyTodo = [...todo]
    console.log(copyTodo)
    copyTodo.splice(i,1)
    console.log(copyTodo)
    setTodo(copyTodo)
  }
  var renderTodo = <h1>No Task Available ....</h1>;
  if (todo.length > 0) {
    renderTodo = todo.map(({ title, description },i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-xl font-semibold">{title}</h5>
            <h5 className="text-xxl font-semibold">{description}</h5>
          </div>
          <button onClick={()=>{deleteHandler(i)}   } className="bg-red-400 text-white px-4 py-2 rounder font-bold">Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-center text-4xl">
        {" "}
        Todo List
      </h1>
      <form onSubmit={SubmitHandler}>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="text-1.3xl border-2 border-zinc-800 px-3 py-2 m-6 "
          placeholder="Enter Title Here..."
        />
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          className="text-1.3xl border-2 border-zinc-800 px-3 py-2 m-6 "
          placeholder="Enter Description Here..."
        />
        <button className=" bg-black text-white px-4 py-2 text-1.1xl font-bold rounded m-6">
          Add Task
        </button>
      </form>

      <div className="m-6 p-5 bg-slate-400 w-auto h-auto">
        <ul>{renderTodo}</ul>
      </div>
    </>
  );
};

export default page;
