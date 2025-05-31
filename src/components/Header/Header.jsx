import './style.scss'
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import UserMenu from '../UserMenu/UserMenu';
import Categories from '../Categories/Categories';
function Header() {
    return(
        <div className='header-wrapper'>
        <header class= 'header'>
        <div className='container'>
        <div className='header_row'>

            <div  className='header_logo'>
                <Logo/>
            </div>
             
            <div  className='header-search'>
                <SearchBar/>
                </div>

            <div  className='header-user'>
               <UserMenu/>
            </div>

            </div>

        </div>
        </header>
         <Categories></Categories>
        </div>

             
    );


};

export default Header;
