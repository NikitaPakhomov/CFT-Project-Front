import React from 'react';
import UserContext from '../../contexts/user-context';
import './Login.scss';
import tomorrowRequest from './../../api/tomorrow';
import { Link, Redirect } from 'react-router-dom';


class Login extends React.Component {
    state = {
        went: false
    };
    static contextType = UserContext;
    submitHandler = (e) => {
        e.preventDefault();
        tomorrowRequest.post('/login', this.state)
            .then(res => {
                console.log(res);
                if (res.data != "Error" && res.data != "") {
                    this.context.togglesAuthentication();
                    this.context.setUserName(this.state.login);
                    localStorage.setItem('authenticated', true);
                    localStorage.setItem('user', this.state.login);
                    setTimeout(() => { this.setState({ went: true }) }, 1200);
                };
            })
            .catch(err => { console.log(err) })
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
        return <div className="login">
            {this.context.authenticated ? <h1>Вы авторизованы!</h1> : <form className="login__form" onSubmit={this.submitHandler}>
                <label htmlFor="login">Login</label>
                <input type="login" id="login" name="login" onChange={this.handleInputChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={this.handleInputChange} />
                <button type="submit">Авторизоваться</button>
                <Link to="auth" className="login__a">Еще нет аккаунта?</Link>
            </form>}
            {this.state.went ? <Redirect from="login" to="/films" /> : ""}
        </div>;
    }
}


export default Login;