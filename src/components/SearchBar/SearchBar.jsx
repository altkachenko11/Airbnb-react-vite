import './style.scss'
import searchIcon from './searchbar.svg'
import Link from '../Link/Link';


const SearchBar = () => {
    return ( 
        <div className="searchbar">
            <div className="searchbar_btns_wrapper"> 
                
                <button className="searchbar_btn">
                    <Link text ="Anywhere"/>
                </button>
                
                
                <button className="searchbar_btn">
                    <Link text ="Any week"/>
                </button>
                
                <button className="searchbar_btn">
                    <Link text ="Add guests" style="grey" />
                </button>
               
               </div>

            <button className="searchbar_btn-search">
            <img src={searchIcon} alt="Search"/>
            </button>

        </div>


     );
}
 
export default SearchBar;