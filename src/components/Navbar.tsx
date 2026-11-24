import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink
             to="/"
             className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`
             }
             end 
            >
                Главная
            </NavLink>
            <NavLink
             to="/books"
             className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`
             }
             
            >
                Книги
            </NavLink>
            <NavLink
             to="/authors"
             className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`
             }
             
            >
                Авторы
            </NavLink>
        </nav>
    )
}