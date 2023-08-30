import ListItem from "./ListItem";


const List =(p)=>{
    return(
        <ul className="list">
            {p.data.map((e)=>{
                return <ListItem key ={e.id} text ={e.text} icon ={e.icon} active = {p.active}/>
            })}
        </ul>
    );
    
}
export default List;