import React, { useContext } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import UserContext from '../../contexts/user-context';

const propTypes = {};

const defaultProps = {};

const Header = () => {
    let { authenticated, user, image } = useContext(UserContext);
    return <header className='header'>
        <div className="header__logo">
            NIKIFLEX
        </div>
        <nav className='header__nav'>
            <ul className='header__ul'>
                <li className='header__li'><NavLink to="/films" className='header__a' activeClassName="active">Фильмы</NavLink></li>
                <li className='header__li'><NavLink to="/top" className='header__a' activeClassName="active">Топы</NavLink></li>
            </ul>
        </nav>
        <div className="header__login"><NavLink to={authenticated ? "/logout" : "/login"} className='header__a' activeClassName="active" ><img src={authenticated ? image : ""} alt="" height="40px" />{authenticated ? `${user},вы авторизованы!` : "Авторизоваться"}</NavLink></div>
    </header >;
}


export default Header;