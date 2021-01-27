import React from 'react';

class FullFilm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            completed: '',
        };
    }

    render() {
        return <div>
            <h1>{this.state.title}</h1>
            <h2>{this.state.completed}</h2>
        </div>;
    }
}


export default FullFilm;