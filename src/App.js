import React from 'react';
import Button from './Button';
import './style.css';

const App=()=>{
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Hello World!!</h1>

            <Button title="App Store" />
            <Button title={"Play Store"} />
            <Button />
            {/* <button className='button'>Hello World</button> */}
        </div>
    )
}
export default App;