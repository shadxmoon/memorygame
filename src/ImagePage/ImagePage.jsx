import { useLocation } from "react-router-dom"
import {images} from '../data'
import { useEffect } from "react"
export default function ImagePage () {

    const location = useLocation()
    const {image} = location.state
    const src = images.find(item => item.id === image).url
    const alt = ''

    return (
        <>
            <img 
                src={src}
                alt={alt}
            />
        </>
    )
}