import React from 'react';
import Button from '../button/Button';
import './Trailer.scss'

const Trailer = (props) => {
    return (<div className="trailer">
        {props.trailer ?
            <iframe className="trailer__videos" src={props.trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> :
            <div className="trailer__text">К сожалению, трейлера нет((</div>
        }
        <Button text='Хватит на сегодня интернета' setActiveTrailer={props.setActiveTrailer} />

    </div>);
}


export default Trailer;