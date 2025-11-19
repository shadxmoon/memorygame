import { useLocation, useNavigate } from "react-router-dom"
import {images} from '../data'
import { useEffect } from "react"
export default function ImagePage () {

    const location = useLocation()
    const {image} = location.state
    const src = images.find(item => item.id === image).url
    const alt = ''
    const navigate = useNavigate()
    useEffect(() => {const timeOut = setTimeout(() => {navigate('/game')}, 4000)
    return () => clearTimeout},[])

    return (
        <>
            <button onClick={() => navigate ('/')}>На главную</button>
            <img 
                src={src}
                alt={alt}
            />
        </>
    )
}