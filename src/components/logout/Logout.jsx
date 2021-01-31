import React, { useContext, useState } from 'react';
import UserContext from './../../contexts/user-context';
import { Redirect } from 'react-router-dom';


const Logout = () => {
    const { togglesAuthentication, setUserName } = useContext(UserContext);
    const [nostate, setNostate] = useState(false);
    function logout(e) {
        e.preventDefault();
        localStorage.removeItem('user');
        localStorage.removeItem('authenticated');
        togglesAuthentication();
        setUserName("anonim");
        setNostate(true)
    }
    return <div className="logout">
        <h1 className="logout__h">Вы действительно хотите выйти?</h1>
        <div className="logout__btn-cont">
            <button className="logout__btn">Нет</button>
            <button className="logout__btn" onClick={logout}>Да</button>
            {nostate === false ? "" : < Redirect from="/logout" to="/" />}
        </div>

    </div>;
}


export default Logout;