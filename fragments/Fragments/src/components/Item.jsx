import styles from "./Item.module.css";
import FoodItems from "./FoodItems";

const Item=(foodItem)=>{
    
    return (
    <li className={'${styles["kg-item"]} '}>
       <span className="kg-span">{FoodItems}</span> 
        </li>

    );
};
export default Item;