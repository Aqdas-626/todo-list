"use client";

import { Trash2 } from "lucide-react";
import React, { useState } from "react";

type TaskItem = {
  task: string;
  desc: string;
}


const page = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [alltasks, setalltasks] = useState<TaskItem[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setalltasks([...alltasks, { task, desc }]);
    // console.log("Task:", task);
    // console.log("Description:", desc);
    settask("");
    setdesc("");
  };


  const handleDelete = (index: number) => {
    const updatedTasks = [...alltasks];
    updatedTasks.splice(index, 1);
    setalltasks(updatedTasks);
  }

  let renderedTasks: React.ReactNode = "No Tasks Found";;

  if (alltasks.length > 0) {
    renderedTasks = alltasks.map((_item, index) => {
      return (
        <div className="flex flex-row justify-between align-middle gap-3 py-2 px-3 w-full">
          <ol className="list-disc min-w-0 flex-1 wrap-break-word">
            <li key={index}>
              <h4 className="text-lg font-bold text-gray-800">{_item.task}</h4>
              <p className="text-black-500 text-[12px]">{_item.desc}</p>
            </li>
          </ol>
          <div className="flex flex-col justify-center items-center">
            <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 hover:cursor-pointer mt-2" onClick={() => handleDelete(index)}>
            <Trash2 className="w-4 h-4" />
          </button>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-2 bg-amber-50">
      <div className="bg-gray-800 p-4 sm:p-8 rounded-lg shadow-md w-full max-w-md ">
        <h1 className="text-4xl text-center font-bold mb-4 text-white">
          My To-do List
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => settask(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Enter task description"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:cursor-pointer"
          >
            Add Task
          </button>
        </form>
        <hr className="mt-4 border-gray-500" />
        <div className="bg-green-200 py-2 px-4 mt-4 rounded-lg shadow-md w-full max-w-md">
          <p className="text-gray-800 text-start">{renderedTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
