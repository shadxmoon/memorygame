import "./Grid.css"
import Card from "../Card/Card.jsx"
import {images} from '../data.js'
import React  from "react"

export default function Grid(){
    const [count, setCount] = React.useState(0)
    return(
        <>
            <div>Количество открытых карточек {count}</div>
            <div className="container">
                {
                    images.map((item)=>(
                        <Card 
                            key={item.id}
                            id={item.id} 
                            src={item.url}   
                            alt="" 
                            count={count}
                            setCount ={setCount}
                        />
                    ))
                }      
            </div>
        </>
        
    )
}