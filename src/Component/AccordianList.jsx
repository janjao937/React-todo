import {FaInbox,FaCalendar,FaChevronDown}  from "react-icons/fa";
import List from "./List";

const ListAccordian =(p)=>{

    if(p.accodian != null && p.accodian?.trim() != ""){
        return(
               
            <div className='accordion'>
            
            <div className='accordion__toggle'>
              <li className='accordion__item'>
                <FaChevronDown className='accordion__item__icon  accordion__item__active' />
                <p className="accordion__item__text">{p.accodian}</p>
              </li>
            </div>
          
            <ul className='list'>
              
            <List data={p.dataList}/>
            </ul>
          </div>
        )

    }
   
    return <List data={p.dataList}/>
    
    
}

export default ListAccordian;