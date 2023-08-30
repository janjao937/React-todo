import Style from "./TodoHeader.module.scss";

const TodoHeader=()=>{
    const today = new Date();
    const option = {day:"numeric",weekday:"short",month:"short"};
    return(
        <div className={Style.header}>
            <h1 className={Style.header__text}>IB</h1>
            <span className={Style.header__date}>{today.toLocaleDateString("en-US",option)}</span>
        
        </div>
    );
}

export default TodoHeader;