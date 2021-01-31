import React, { useContext } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
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
                <li className='header__li'><Link to="/films" className='header__a'>Фильмы</Link></li>
                <li className='header__li'><Link to="/" className='header__a'>Главная</Link></li>
                <li className='header__li'><Link to="/top" className='header__a'>Топы</Link></li>
            </ul>
        </nav>
        <div className="header__login"><Link to={authenticated ? "/logout" : "/login"} className='header__a' ><img src={authenticated ? image : ""} alt="" height="40px" />{authenticated ? `${user},вы авторизованы!` : "Авторизоваться"}</Link></div>
    </header >;
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;


export default Header;