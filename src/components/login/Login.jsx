import React from 'react';
import UserContext from '../../contexts/user-context';
import './Login.scss';
import axios from "axios"
import tomorrowRequest from './../../api/tomorrow';


class Login extends React.Component {
    state = {
    };
    static contextType = UserContext;
    submitHandler = (e) => {
        e.preventDefault();
        tomorrowRequest.post('/login', this.state)
            .then(res => {
                console.log(res);
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
            {this.context.authenticated ? <h1>Вы уже авторизованы!</h1> : <form className="login__form" onSubmit={this.submitHandler}>
                <label for="login">Login</label>
                <input type="login" id="login" name="login" onChange={this.handleInputChange} />
                <label for="password">Password</label>
                <input type="password" id="passsword" name="password" onChange={this.handleInputChange} />
                <button type="submit">Авторизоваться</button>
            </form>}
        </div>;
    }
}


export default Login;