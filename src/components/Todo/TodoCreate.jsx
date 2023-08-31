import styles from './TodoCreate.module.scss';
import TodoForm from "./TodoForm"
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { useState } from 'react';


/*
#codition rendering
-default :show button & text
-active : show TodoForm
#event handilng 
-เอาฟังค์ชั่นไปผูกติดกับ UI เพื่อให้ user เป็นคนเรียกเอง
#Js value ไม่สามารถทำให้ React re-render ได้
# useState (hook FN)
-[state,setState]=useState(initialValue)
-state = state
-setState = FN ในการ change stateValue
-เมื่อมีการเปลี่ยน State จะเป็นการ Re-render
-Re-Render คือ Render ใหม่ทั้งหน้า
*/

function TodoCreate() {
  //Hook
  const [isOpenForm,setIsOpenForm] = useState(false);
  
  const handleClick =()=>{
    setIsOpenForm(!isOpenForm);
    console.log("Banana"+isOpenForm);
  }
  return (
 
    <>  
    {
      isOpenForm?<TodoForm/>
      :(
        <div onClick={handleClick} className={styles.todo__create}>
        <div className={styles.todo__create__button}>
          <HiPlus />
        </div>
        <h3 className={styles.todo__create__text}>Add Task</h3>
      </div>
      )
    }
    
    </>
  );
}

export default TodoCreate;
