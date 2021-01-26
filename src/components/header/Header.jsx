import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const propTypes = {};

const defaultProps = {};

const Header = () => {
    return <header className='header'>
        <div className="header__logo">
            NIKIFLEX
        </div>
        <nav className='header__nav'>
            <ul className='header__ul'>
                <li className='header__li'><a href="#" className='header__a'>Фильмы</a></li>
                <li className='header__li'><a href="#" className='header__a'>Главная</a></li>
                <li className='header__li'><a href="#" className='header__a'>Топы</a></li>
            </ul>
        </nav>
    </header>;
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;


export default Header;