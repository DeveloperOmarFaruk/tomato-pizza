import React, { useEffect, useState } from 'react'
import '../../App.css'

const Count = (props) => {
    const {icon, counter, title, duration} = props

    const [count, setCount] = useState("0")


    useEffect(() => {
        let start = 0;
        // first three numbers from props
        const end = parseInt(counter.substring(0,3))
        // if zero, return
        if (start === end) return;
    
        // find duration per increment
        let total = parseInt(duration);
        let incrementTime = (total / end) * 1000;
    
        // timer increments start counter 
        // then updates count
        // ends if start reaches end
        let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + counter.substring(3))
        if (start === end) clearInterval(timer)       
        }, incrementTime);
    
        // dependency array
    }, [counter, duration]);

    return (
        <>
        <div className="col-3">
            <div className="client">
            <div className="box">
            <img className='icon-img' src={icon} alt="counter" />
            <h1 className='counter'>
            {count}
            </h1>
            <p>
            {title}
            </p>
            </div>
            </div>
            </div>
        </>
    )
}

export default Count
