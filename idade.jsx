import {useState} from 'react';

function Idade() {

    const [age,setAge]=useState(20)

    const changeAge =()=>{
        setAge(40)
    }
    
    return (
    <div>
        <p>Your age is {age}</p>
        
        <button onClick={changeAge}>Change Age</button>
        <br/>
        <input value={age} onChange={(e)=>setAge(e.target.value)} />
    </div>
    );
}

export default Idade;