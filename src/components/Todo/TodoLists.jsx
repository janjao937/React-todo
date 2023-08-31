import styles from './TodoLists.module.scss';
import { useState } from 'react';
import TodoItem from "./TodoItem"

//data

const mockData = [{ "id": 1, "task": "Suspendisse potenti.", "status": false, "due_date": "2023-04-26" },
{
    "id": 2,
    "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "status": false,
    "due_date": "2023-05-08"
},
{
    "id": 3,
    "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    "status": false,
    "due_date": "2023-04-30"
}]

function TodoLists() {
  //CRUD = Create-Read=Update=Delete

  const [allTask,setAllTask] = useState(mockData);

  return (
    <ul className={styles.todo__lists}>
     {allTask.map((e)=><TodoItem task={e.task} date = {e.due_date} done={e.status} key ={e.id}/>)}
     {/* can use {mockData.map(({id,task,status,due_date})=><TodoItem task={e.task} date = {e.due_date} done={e.status} key ={e.id}/>)} */}
    </ul>
  );
}

export default TodoLists;
