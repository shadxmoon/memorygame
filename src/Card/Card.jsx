import { Link } from "react-router-dom";
import "./Card.css"
import React  from "react";
export default function Card({src, alt, count, setCount, id}){
    const [isVisible, setIsVisible] = React.useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible);
        if(isVisible){
            setCount(count - 1)
        } else {
            setCount(count + 1)
        }
        
    }
    const classCard = `card ${isVisible ? 'card-show': ''}`
    return(
       // <div className={classCard} onClick={handleClick} >
       <div>
        <Link to='/image' state={{image:id}}>
            <img 
                src={src} 
                alt={alt} 
            />
        </Link>
        </div>
    )
}