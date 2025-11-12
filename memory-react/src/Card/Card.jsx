import "./Card.css"
import React from "react";

export default function Card({src, alt, count, setCount}){
    const [example, setExampel] = React.useState(0); 
    const [isVisible, setIsVisible] = React.useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible);
        if(isVisible){
            setCount(count + 1)
        } else {
            setCount(count -1)
        }
    }
    const classCard = `card ${isVisible ? `card-show`: ''}`
    return(
        <div className={classCard} onClick={handleClick}>
            <img 
                src={src} 
                alt={alt} 
            />
        </div>
    )
}