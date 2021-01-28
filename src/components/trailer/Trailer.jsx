import React from 'react';
import Button from '../button/Button';
import './Trailer.scss'

const Trailer = (props) => {
    return (<div className="trailer">
        <iframe className="trailer__videos" src={props.URL} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <Button text='Хватит на сегодня интернета' setActiveTrailer={props.setActiveTrailer} />

    </div>);
}


export default Trailer;