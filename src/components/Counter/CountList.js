import React from 'react'
import Count from './Count'

const CountList = (props) => {
    const countsList = props.data.map(count => (
        <Count
        id={count.id}
        icon={count.icon}
        counter={count.counter}
        title={count.title}
        />
    ));
    return (
        <>
        <div className="clients">
        <div className="container">
        <div className="row">
            {countsList}
        </div>
        </div>
        </div>
        </>
    )
}

export default CountList
