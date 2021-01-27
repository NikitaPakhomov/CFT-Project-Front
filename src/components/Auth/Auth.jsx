import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0 from 'auth0-js';

const { Provider, Consumer: AuthConsumer } = React.createContext({
    isAuthorized: false,
})

class AuthProvider extends React.Component {
    state = {
        isAuthorized: false,
    };
    auth0 = new auth0.WebAuth({
        domain: "dev-l2ci2bzu.us.auth0.com",
        clientId: "xvYRXBr649kfT4oOwXDJjhXvzQ82PKvR",
        url: "http://localhost:3000",
    });
    authorize = () => {
        this.setState({ isAuthorized: true }, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { isAuthorized } = this.state;
        return <Provider value={{ isAuthorized, authorize: this.authorize }} >
            {this.props.children}
        </Provider >

    }
}

export function withAuth(WrappedComponent) {
    return class AuthHOC extends Component {
        render() {
            return (
                <AuthConsumer>
                    {contextProps => (
                        <WrappedComponent {...contextProps}{...this.props} />
                    )
                    }
                </AuthConsumer>
            )
        }
    }
}

const AuthProviderWithRouter = withRouter(AuthProvider);

export { AuthProviderWithRouter as AuthProvider };