import './style.scss'
import filterIcon from './filterIcon.svg'

const FilterBtn = () => {
    return ( <button className="filter-btn">
     <img src={filterIcon} alt="Filter"></img>
    </button> );
}
 
export default FilterBtn;