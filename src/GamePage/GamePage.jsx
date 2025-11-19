import { Link, Outlet } from 'react-router-dom'
import Grid from '../Grid/Grid'

export default function GamePage(){
    return (
        <>
            <header>
                <h1>игра мемори</h1> 
                <Link to='/' className='link-to-main'>на главную</Link>
            </header>
            <Outlet/>
            <footer>
                <p>&copy; memory 2025</p>
            </footer>
        </>
    )
}