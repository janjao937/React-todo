import styles from './TodoForm.module.scss';
import {Button} from "../Common/Button/Button";
import { useState } from 'react';

function TodoForm(p) {
  const [stateIsError,setIsError]  = useState(false);
  return (
    <form className={styles.todo__form__container}>
      {/*	Body */}
      <input className={styles.todo__form__input} placeholder='Task Name' />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>

        {p.title!=null?<p className={styles.todo__error}>{p.title}</p>:""}

        <div className={styles.todo__form__buttons}>
          <Button text ="Cancel" active={true}/>
          <Button text ={p.textSubmit}/>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
