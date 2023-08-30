
import './App.scss';
import {FaInbox,FaCalendar,FaChevronDown}  from "react-icons/fa";
import Header from "./Component/Header";
import ListItem from './Component/ListItem';
import List from './Component/List';



function App() {
 
  const generalList = [
    {id:1,text:"Banana Doe",icon:<FaInbox/>,active:false},
    {id:2,text:"Inbox Jane",icon:<FaInbox/>,active:false},
    {id:3,text:"Doe Box",icon:<FaInbox/>,active:false},

  ];
  const projectList = [
    {id:1,text:"Banana IB",icon:<FaInbox/>,active:true},
    {id:2,text:"Inbox",icon:<FaInbox/>,active:false},
    {id:3,text:"Inbox",icon:<FaInbox/>,active:false},

  ];
  return (
    <div className="todo">
    <div className="todo__header">
      <Header/>
    </div>

    <div className="todo__sidebar"> 
        <aside className='sidebar'>
          <section className="sidebar__category">
          <List data={generalList}/>
          </section>

          <section className='sidebar__category'>
            <div className='accordion'>
              {/* Toggle */}
              <div className='accordion__toggle'>
                <li className='accordion__item'>
                  <FaChevronDown className='accordion__item__icon  accordion__item__active' />
                  <p className='accordion__item__text'>Projects</p>
                </li>
              </div>
              {/* Lists */}
              <ul className='list'>
                
              <List data={projectList}/>
              
              </ul>
            </div>
          </section>
        </aside>
    </div>
    <div className="todo__content">TodoContent</div>

    </div>
  );
}

export default App;
