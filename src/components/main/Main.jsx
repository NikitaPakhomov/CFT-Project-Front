import React from 'react';
import './Main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div className="main"><h1 className="main__h1">Main</h1></div>;
    }
}

export default Main;