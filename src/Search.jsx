import { FaSearch } from "react-icons/fa";
import "./Header.scss";

const Search = ()=>{
    return(
        <div className="search">
          <span className ="search__icon">
            <FaSearch/>
          </span>
          <input placeholder="search" className="search__input"/>
        </div>
    );
}

export default Search;