import react from "react";
import './Store.css'
import Footer from "../../Layout/Footer";
const Store = (props)=>{

    const storeItems = <ul className="unOrderedList">
        {props.storeItems.map(item=>
            (
                <div key={item.key} className="mainList">
                    
                    <li className="itemTitle">{item.title}</li>
                    <img className="itemImage" src={item.imageUrl}/>
                    <div> 
                        <div className="itemPrice">{`Rs${item.price}`}</div>  
                        <button className="addToCart">Add TO Cart</button>
                    </div>
               </div>
               
               
            ))}
    </ul>

    return(
        <>
            <div className="itemDes">Music</div>
            {storeItems}
            
        </>
    );



};
export default Store;