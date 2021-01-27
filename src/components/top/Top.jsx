import React from 'react';
import './Top.scss';

class Top extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div className="top"><h1 className="top__h1">Top</h1></div>;
    }
}


export default Top;