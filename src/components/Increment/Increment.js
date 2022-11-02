import React, { useState } from 'react'
import "./Increment.scss"

function Increment() {
    const [count, setCount] = useState(0)
    

    const CountPlus =()=>{
        setCount(count + 1)
    }

    const CountMinus = ()=>{
        setCount(count - 1)
    }


    return (
        <div className='box'>
            <h2 className='heading'>Hisoblagich</h2>
            <h1 className='elCount'>{count}</h1>
            <button className='minus btn' onClick={CountMinus}>Ayrish (-)</button>
            <button className='plus btn' onClick={CountPlus}>Qo'shish (+)</button>
        </div>
    )
}

export default Increment
