import './style.scss'
import navIcon from './nav.svg';

const Account = () => {
    return ( <button className="account">
        <div className="account_nav"></div>
        <img src={navIcon} alt="Nav"></img>
        <div className="account_avatar"></div>
        <img src="./img/icons/user-avatar.svg" alt="user-avatar"></img>
    </button>  );
}
 
export default Account;