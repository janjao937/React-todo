import styles from './TodoItem.module.scss';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import { useState } from 'react';

import TodoForm from "./TodoForm"

const TodoItem =(p)=>{
    const {id,task,done,date} = p;
    const [editState,setEditState] = useState(false)
    // console.log(p.id)
    const handleEdit =()=>{
      setEditState(!editState);
    }

    const toggleStatus =()=>{
      const newTaskObject = {id,task,date,status:!done}
      p.editTask(id,newTaskObject);
    }

    return editState?<TodoForm oldTask ={{id,task,done,date}} editTask = {p.editTask} setIsOpenForm={setEditState} textSubmit ="Edit Banana Joe"/> :(
        <li className={styles.todo}>
        <div className={`${styles.todo__checkbox} ${ done?styles.todo__checkbox__done:""}`}>
          <HiOutlineCheck onClick={toggleStatus} className={styles.todo__checkbox__icon} />
        </div>
        <p className={`${styles.todo__task} ${done?styles.todo__task__done:""}`}>{task}</p>
        <span className={styles.todo__date}>{date}</span>
        <div className={styles.todo__action}>
          <span onClick={handleEdit}> 
            <FaPen className={styles.todo__edit} />
          </span >
          <span onClick = {()=>p.deleteTask(p.id)}>
            <FaTrashAlt className={styles.todo__delete} />
          </span>
        </div>
      </li>
      );
    }

    export default TodoItem;