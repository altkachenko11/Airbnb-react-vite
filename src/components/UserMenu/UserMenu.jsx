import './style.scss'
import Link from '../Link/Link';
import location from './location.svg';
import Account from '../Account/Account';

const UserMenu = () => {
    return (  
        <div className="user-menu">
            <div className="user-menu_home">
               <Link text="Airbnb your home"></Link> 
                </div>
            <div className="user-menu_local">
                 <Link  icon={location}></Link>
                </div>
            <div className="user-menu_user">
                 <Account></Account>
                 </div>
        </div>

    );
}
 
export default UserMenu;