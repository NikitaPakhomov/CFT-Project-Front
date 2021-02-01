/* eslint-disable */
import React, { useContext, useState } from 'react';
import './Logout.scss';
import UserContext from './../../contexts/user-context';
import { Redirect } from 'react-router-dom';



const Logout = () => {
    const { togglesAuthentication, setUserName } = useContext(UserContext);
    const [nostate, setNostate] = useState(false);
    const [yesstate, setYesstate] = useState(true);
    function logout(e) {
        e.preventDefault();
        localStorage.removeItem('user');
        localStorage.removeItem('authenticated');
        togglesAuthentication();
        setUserName("anonim");
        setNostate(true)
    }
    function no(e) {
        e.preventDefault();       
        setYesstate(false);
    }
    return <div className="logout">
        <h1 className="logout__h">Вы действительно хотите выйти?</h1>
        <div className="logout__btn-cont">
            <button className="logout__btn" onClick={no}>Нет</button>
            <button className="logout__btn" onClick={logout}>Да</button>
            {nostate === false ? "" : < Redirect from="/logout" to="/films" />}
            {yesstate === true ? "" : < Redirect from="/logout" to="/films" />}
        </div>

    </div>;
}


export default Logout;