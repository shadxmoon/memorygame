import { Link } from 'react-router-dom'
import Grid from '../Grid/Grid'

export default function GamePage(){
    return (
        <>
            <Link to='/' className='link-to-main'>на главную</Link>
            <Grid/>
        </>
    )
}