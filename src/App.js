
import './App.scss';
import {FaInbox,FaCalendar,FaChevronDown}  from "react-icons/fa";
import Header from "./Component/Header";
import List from './Component/List';
import TodoHeader from "./Component/TodoComponent/TodoHeader";
import TodoCreate from "./Component/TodoComponent/TodoCreate";
import TodoList from "./Component/TodoComponent/TodoList";
import ListAccordian from './Component/AccordianList';


function App() {
 
  const generalList = [
    {id:1,text:"Banana Doe",icon:<FaInbox/>,active:false},
    {id:2,text:"Inbox Jane",icon:<FaCalendar/>,active:false},
    {id:3,text:"Doe Box",icon:<FaInbox/>,active:true},

  ];
  const projectList = [
    {id:1,text:"Banana IB",icon:<FaInbox/>,active:true},
    {id:2,text:"Inbox",icon:<FaCalendar/>,active:false},
    {id:3,text:"Inbox",icon:<FaCalendar/>,active:true},

  ];
  return (
    <div className="todo">
    <div className="todo__header">
      <Header/>
    </div>

    <div className="todo__sidebar"> 
        <aside className='sidebar'>
          <section className="sidebar__category">

          <ListAccordian dataList={generalList}/>

          </section>

          <section className='sidebar__category'>

          <ListAccordian dataList={projectList} accodian ="Project"/>

          </section>
        </aside>
    </div>
    <div className="todo__content">
      <div className="todo__container">
        <TodoHeader/>
        <TodoCreate/>
        <TodoList/>
      </div>
    </div>

    </div>
  );
}

export default App;
