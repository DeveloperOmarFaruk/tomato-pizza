import React from 'react'
import Price from './Price';

const EventList = (props) => {
    const eventsList = props.data.map(event => (
        <Price
        id={event.id}
        image={event.image}
        title={event.title}
        description={event.description}
        price={event.price}
        />
    ));
    return (
        <>
        <div className="prices">
            <div className="container">
            <div className="row">
            {eventsList}
            </div>
            </div>
            </div>
        </>
    )
}

export default EventList
