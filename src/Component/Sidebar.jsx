import './Sidebar.scss';
import { FaHome } from "react-icons/fa";

const Sidebar =()=>{
    return(
        <div className="sidebar">
          
            <div className="sidebar__container">
                    <span className="sidebar__icon">
                        <FaHome/>
                    </span>
                    <a className="sidebar__link">Home</a>
            </div>
            <div className="sidebar__container">
                    <span className="sidebar__icon">
                        <FaHome/>
                    </span>
                    <a className="sidebar__link">Home</a>
            </div>
            <div className="sidebar__container">
                    <span className="sidebar__icon">
                        <FaHome/>
                    </span>
                    <a className="sidebar__link">Home</a>
            </div>

            <div className="sidebar__container sidebar__dropDown">
                    <span className="sidebar__icon">
                        <FaHome/>
                    </span>
                    <a className="sidebar__link">Dropdown</a>

                <div className="sidebar__dropDownContent">

                <div>
                    <span className="sidebar__icon">
                        <FaHome/>
                    </span>
                    <a className="sidebar__link">Home</a>
                </div>
                <div>
                    <span className="sidebar__icon">
                        <FaHome/>
                    </span>
                    <a className="sidebar__link">Home</a>
                </div>
                <div>
                    <span className="sidebar__icon">
                        <FaHome/>
                    </span>
                    <a className="sidebar__link">Home</a>
                </div>
              

                </div>
                   
            </div>
            
          
            
        </div>
    )

}

export default Sidebar;