import style from "./TodoList.module.scss";

const TodoList = ()=>{
    return(
        <ul className={style.todo__lists}>
        <li className={style.todo}>
          <span className={style.todo__checkbox}></span>
          <p className={style.todo__task}>TodoItem 1 </p>
          <span classNam e={style.todo__date}>30 AUG</span>
          <div className={style.todo__action}>
            <span className={style.todo__edit}></span>
            <span className={style.todo__delete}></span>
          </div>
        </li>
      </ul>
    );
}

export default TodoList;