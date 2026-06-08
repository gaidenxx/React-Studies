import { NavLink } from "react-router-dom"; // Use Link instead of <a> to prevent refresh app unnecessary
import classes from './MainNav.module.css';

export default function MainNav() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({isActive}) => isActive ? classes.active : undefined}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/products" 
                            className={({isActive}) => isActive ? classes.active : undefined}
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}