import style from "../TodoComponent/TodoCreate.module.scss";

const TodoCreate =()=>{
    return(
        <div className={style.todo__create}>
            <div className={style.todo__create__btn}>+</div>
            <h3 className={style.todo__create__text}>Todo</h3>
        </div>
    );
}
export default TodoCreate;  