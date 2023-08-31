import styles from './TodoForm.module.scss';
import {Button} from "../Common/Button/Button";
import { useState } from 'react';

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
    /*
    FormValidatetion
    //Case1 => submit 
    //case2 => Error
    */
  SetTaskInput("");
   if(taskInput.trim()=== "")
   {
    setIsError(true);
    console.log("Error");
    return;
   }
    
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
          <Button type="button" text ="Cancel" OnClick = {handleCancle} active={false}/>
          <Button type ="submit" text ={p.textSubmit} />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
