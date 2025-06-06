import CategoryItem from '../CategoryItem/CategoryItem';
import FilterBtn from '../FilterBtn/FilterBtn';
import categoriesData from './../../data/categories.json'
import './style.scss'



const Categories = () => {

    console.log(categoriesData);
    return ( <div className="categories">
                <div className="container">
                    <div className="categories_row">
                    <div className="categories_list">
                        {categoriesData.map((cat, index)=>{
                            return(
                                 <CategoryItem 
                                  title={cat.title}
                                  img={cat.img}
                                  key={index}

                                 />


                            );
                        })}
                       
                    </div>
                    <div className="categories_filter">
                        <FilterBtn></FilterBtn>
                        
                    </div>
                </div>
                </div>
             </div>
 );
    
}
 
export default Categories;