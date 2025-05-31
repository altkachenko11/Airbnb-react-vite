import Card from "./Card/Card";
import cardsData from "./../data/data.json";
import "../styles/index.scss";


const Main = () => {
    return ( <main className="main">

        <div className="container">
       
       <div className="main-cards"> 
        {cardsData.map((item, index) => {
            return <Card data={item} key={index} />;
        })}
    
       </div>
        </div>

    </main> );
}
 
export default Main;