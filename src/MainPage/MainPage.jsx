import { Link } from "react-router-dom";

export default function MainPage() {
    return (
            < >
                <h1>Игра мемори</h1>
                <p>Правила игры</p>
                <ol>
                    <li>Правило 1</li>
                    <li>Правило 2</li>
                    <li>Правило 3</li>
                </ol>
                <Link to='/game'>Начать игру</Link>
            </>
    ) 
}