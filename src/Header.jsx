import { FaHome,FaSearch } from "react-icons/fa";
import "./Header.scss";

const Header=()=>{
    return(
        <div className="header"> 
      <div className="header__logo"> <FaHome /> </div>
      <h1 className="header__text">TodoList</h1>

      <div className="header__search">

        <div className="search">
          <span className ="search__icon">
            <FaSearch/>
          </span>
          <input placeholder="search" className="search__input"/>
        </div>
       

      </div>

    </div>
    );
}

export default Header;