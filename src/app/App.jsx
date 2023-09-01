// Dependencies
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';
import { useState } from 'react';
import {nanoid} from "nanoid"
import dayjs from "dayjs"
const mockData = [{ "id": nanoid(), "task": "Suspendisse potenti.", "status": false, "due_date": "2023-04-26" },
{
    "id": nanoid(),
    "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "status": false,
    "due_date": "2023-05-08"
},
{
    "id": nanoid(),
    "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    "status": false,
    "due_date": "2023-04-30"
}];

function App() {
  const [allTask,setAllTask] = useState(mockData);
  
  const addTask=(taskInput)=>
  {
    const newTask ={id:nanoid(),task:taskInput,status:false,due_date:dayjs().format('YYYY-MM-DD')};
    setAllTask((e)=>[newTask,...e]);
  }
  const deleteTask=(id)=>
  { 
    console.log(id);
    setAllTask(allTask.filter((e)=>e.id != id));
  }
  const editTask=(id,taskObj)=>{
   
   /*
   Solution 1
    let found = allTask.findIndex((e)=>e.id ===id);
    if(!found)return; 
    const newTodo =Object.assign({},found,obj);
    let foundIndex = allTask.findIndex((todo)=>todo.id===id);
    if(foundIndex=== -1) return;

    const newTodoList = [...allTask];
    newTodoList.splice(foundIndex,1,newTodo);
    setAllTask(newTodoList);*/

    //Solution 2
    const newTaskList = allTask.map((e)=>{
      if(e.id!== id) return e;
      else return {...e,...taskObj};
    })
    setAllTask(newTaskList);
  
 
  }
  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate addTask={addTask} />
          <TodoLists editTask={editTask} deleteTask = {deleteTask}  allTask={allTask} />
        </main>
      </div>
    </div>
  );
}

export default App;
