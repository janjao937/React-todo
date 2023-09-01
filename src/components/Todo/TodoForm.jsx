import styles from './TodoForm.module.scss';
import {Button} from "../Common/Button/Button";
import { useState } from 'react';
import {nanoid} from "nanoid"
/*
handle submit 2 type
-type = submit : จะทำการ
-type = button
*/

/*prop{
  text = btn name
  setIsOpenForm = F()
} 


*/

function TodoForm(p) {
  const [stateIsError,setIsError]  = useState(false);
  const [taskInput,SetTaskInput] = useState("");

  const handleChangeInput=(e)=>{
    // console.log(e.target.value);
    
    if(stateIsError){
      setIsError(false);
    }
    SetTaskInput(e.target.value);
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newTask ={id:nanoid(),task:taskInput,status:false,due_date:"2023-04-30"}
    
    /*
    FormValidatetion
    //Case1 => submit 
    //case2 => Error
    
    1-Request and save on database
    2-Update state and re-render
    */
    //add nanoid in key
    
   // p.setAllTask([newTask,...p.allTask]);
    p.setAllTask((old)=>[newTask,...old])
    SetTaskInput("");
   
   if(taskInput.trim()=== "")
   {
    setIsError(true);
    // console.log("Error");
    return;
   }
   p?.setIsOpenForm(false);
  }
  const handleCancle=()=>{
    //console.log("Cancle");
    p?.setIsOpenForm(false);
    SetTaskInput("");
  }
  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input onChange={(e)=>handleChangeInput(e)} value ={taskInput} className={styles.todo__form__input} placeholder='Task Name' />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>

        {stateIsError?<p className={styles.todo__error}>{p.title!=null?p.title:"Title is Required"}</p>:""}

        <div className={styles.todo__form__buttons}>
          <Button type="button" text ="Cancel" OnClick = {handleCancle} active={true}/>
          <Button type ="submit" text ={p.textSubmit} />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
