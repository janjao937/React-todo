import { FaHome,FaSearch } from "react-icons/fa";
import "./Header.scss";
import SearchBar from "./Search";

const Header=()=>{
    return(
        <div className="header"> 
      <div className="header__logo"> <FaHome /> </div>
      <h1 className="header__text">TodoList</h1>

      <div className="header__search">
        <SearchBar/>
      </div>

    </div>
    );
}

export default Header;