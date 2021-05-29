import React from 'react'
import '../../App.css'
const Price = (props) => {
    return (
        <>
            <div className="col-4">
            <div className="price">
            <div className="price__img">
                <img src={props.image} alt="pizza" />
            </div>
            <h1 className="price__heading">{props.title}</h1>
            <p className="price__text">{props.description}</p>
            <p className="price_rs">{props.price}</p>
            </div>
            </div>
        </>
    )
}

export default Price
