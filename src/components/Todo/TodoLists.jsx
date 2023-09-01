import styles from './TodoLists.module.scss';
import { useState } from 'react';
import TodoItem from "./TodoItem"

//data
 

function TodoLists(p) {
  //CRUD = Create-Read=Update=Delete

  // const [allTask,setAllTask] = useState(mockData);

  return (
    <ul className={styles.todo__lists}>
     {p.allTask.map((e)=><TodoItem task={e.task} date = {e.due_date} done={e.status} id ={e.id} key ={e.id}/>)}
     {/* can use {mockData.map(({id,task,status,due_date})=><TodoItem task={e.task} date = {e.due_date} done={e.status} key ={e.id}/>)} */}
    </ul>
  );
}

export default TodoLists;
