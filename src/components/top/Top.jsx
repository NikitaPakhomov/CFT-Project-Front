import React from 'react';
import './Top.scss';
import FilmsRow from '../filmsRow/FilmsRow';
class Top extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div className="top">
            <FilmsRow h="Лучшие фильмы прошлых лет" url="toptenfilms" clickChecker={this.clickChecker} key="21" pos="1" />
            <FilmsRow h="Самые дорогие фильмы" url="topbudgetfilms" key="22" pos="2" clickChecker={this.clickChecker} />
            <FilmsRow h="Самые кассовые фильмы" url="topcassfilms" clickChecker={this.clickChecker} key="23" pos="3" />
        </div>;
    }
}


export default Top;