import React,{useState} from 'react'

const Blank = () => {
    const [counter, setCounter] = useState(false)
    const changer =()=>{
        setCounter(true)
    }
    return (
        <div>
       {counter?(<div> 1</div>) : (<div> 2</div>)}
       <button onClick={changer}>Next</button>
       </div>
    )
}

export default Blank
