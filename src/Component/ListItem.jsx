import "./ListItem.scss";
import {FaInbox} from "react-icons/fa";

const ListItem =(p)=>{
    const listClassName = `list__item ${p.active?"active":""}`
    return(
        <li className={listClassName}>
                {p.icon}
                <p className="list__item"> {p.text} </p>
        </li>
    );
}

export default ListItem;