import React from 'react';
import UserContext from '../../contexts/user-context';
import './Auth.scss';
import tomorrowRequest from './../../api/tomorrow';
import { Redirect } from 'react-router-dom';


class Auth extends React.Component {
    state = {
        login: "",
        password: "",
        secPass: "",
        registered: false,
        loginDirty: true,
        passwordDirty: true,
        difPassword: false,
        ready: false,
        clicked: false,
    };
    static contextType = UserContext;

    submitHandler = (e) => {
        e.preventDefault();
        tomorrowRequest.post('/auth', this.state)
            .then(res => {
                console.log(res);
                if (res.data == "ok") {
                    this.setState({ registered: true });
                };
            })
            .catch(err => { console.log(err) })
    }

    checkDirtyLogin = () => {
        return this.state.login.length < 5 ? this.setState({ loginDirty: true }) : this.setState({ loginDirty: false });
    }
    checkDirtyPassword = () => {
        return this.state.password.length < 7 ? this.setState({ passwordDirty: true }) : this.setState({ passwordDirty: false });
    }
    checkDifPassword = () => {
        return this.state.password === this.state.secPass ? this.setState({ difPassword: false }) : this.setState({ difPassword: true });
    }

    checkClicks = () => {
        return setTimeout(() => {
            this.setState({ clicked: true })
        }, 2000);
    }

    readyCheck = () => {
        console.log(this.state.loginDirty && this.state.passwordDirty && this.state.difPassword);
        return this.state.loginDirty || this.state.passwordDirty || this.state.difPassword ? this.setState({ ready: false }) : this.setState({ ready: true });
    }



    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return <div className="auth">
            <form className="auth__form" onSubmit={this.submitHandler} onBlur={() => { this.checkDirtyLogin(); this.readyCheck() }}>
                <label htmlFor="auth">Логин</label>
                {this.state.loginDirty ? "Логин должен быть больше 4 символов" : ""}
                <input type="auth" id="login" name="login" onChange={this.handleInputChange} />
                <label htmlFor="password">Пароль</label>
                {this.state.passwordDirty ? "Пароль должен быть больше 6 символов" : ""}
                <input type="password" id="password" name="password" onChange={this.handleInputChange} onBlur={() => { this.checkDirtyPassword(); this.readyCheck() }} />
                <label htmlFor="password2">Повторите пароль</label>
                {this.state.difPassword ? "Пароли не совпадают" : ""}
                <input type="password" id="password2" name="secPass" onChange={this.handleInputChange} onBlur={() => { this.checkDifPassword(); this.readyCheck() }} />
                {this.state.ready ? <button type="submit" onClick={this.checkClicks} >Зарегистрироваться</button> : <button type="submit" disabled >Зарегистрироваться</button>}
            </form>
            {this.state.clicked ? <Redirect from="/auth" to="/login" /> : ""}
        </div>;
    }
}


export default Auth;