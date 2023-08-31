import styles from './TodoItem.module.scss';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';
import { useState } from 'react';

import TodoForm from "./TodoForm"

const TodoItem =()=>{

    const [editState,setEditState] = useState(false)

    const handleEdit =()=>{
      setEditState(!editState);
   
    }
    return editState?<TodoForm setIsOpenForm={setEditState}  textSubmit ="Edit Banana Joe"/> :(
        <li className={styles.todo}>
        <div className={`${styles.todo__checkbox} ${styles.todo__checkbox__done}`}>
          <HiOutlineCheck className={styles.todo__checkbox__icon} />
        </div>
        <p className={`${styles.todo__task} ${styles.todo__task__done}`}>todo-item 1 </p>
        <span className={styles.todo__date}>30 Aug</span>
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