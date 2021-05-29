import classes from './Header.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {authActions} from '../redux/store/authSlice';

const Header = () => {
  const isLoginAuth = useSelector(state => state.auth.isAuthenticated);

  const dispatch = useDispatch();

const logoutHandler = event => {
  event.preventDefault();
  dispatch(authActions.logout());
}

  const headerContent = <nav>
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
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoginAuth && headerContent}
    </header>
  );
};

export default Header;
