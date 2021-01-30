import React from 'react';
import UserContext from '../../contexts/user-context';
import './Auth.scss';
import tomorrowRequest from './../../api/tomorrow';


class Auth extends React.Component {
    state = {
        registered: false,
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
            {this.context.authenticated ? <h1>Вы авторизованы!</h1> : <form className="auth__form" onSubmit={this.submitHandler}>
                <label htmlFor="auth">Логин</label>
                <input type="auth" id="login" name="login" onChange={this.handleInputChange} />
                <label htmlFor="password">Пароль</label>
                <input type="password" id="passsword" name="password" onChange={this.handleInputChange} />
                <label htmlFor="password2">Повторите пароль</label>
                <input type="password" id="passsword2" name="password2" onChange={this.handleInputChange} />
                <button type="submit">Зарегистрироваться</button>
            </form>}
        </div>;
    }
}


export default Auth;