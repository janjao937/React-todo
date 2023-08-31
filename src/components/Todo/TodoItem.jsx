import styles from './TodoItem.module.scss';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import { useState } from 'react';

import TodoForm from "./TodoForm"

const TodoItem =(p)=>{
    const {task,done,date} = p;
    const [editState,setEditState] = useState(false)

    const handleEdit =()=>{
      setEditState(!editState);
   
    }
    return editState?<TodoForm setIsOpenForm={setEditState}  textSubmit ="Edit Banana Joe"/> :(
        <li className={styles.todo}>
        <div className={`${styles.todo__checkbox} ${ done?styles.todo__checkbox__done:""}`}>
          <HiOutlineCheck className={styles.todo__checkbox__icon} />
        </div>
        <p className={`${styles.todo__task} ${done?styles.todo__task__done:""}`}>{task}</p>
        <span className={styles.todo__date}>{date}</span>
        <div className={styles.todo__action}>
          <span onClick={handleEdit}> 
            <FaPen className={styles.todo__edit} />
          </span>
          <span>
            <FaTrashAlt className={styles.todo__delete} />
          </span>
        </div>
      </li>
      );
    }

    export default TodoItem;