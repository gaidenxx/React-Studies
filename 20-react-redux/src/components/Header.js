import classes from './Header.module.css';

// Redux
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index.js';

const Header = ({isAuth}) => {
  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
