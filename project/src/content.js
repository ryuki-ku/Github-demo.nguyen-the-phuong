import App from './App'
import {useState} from 'react'
function content() {
    const [show, setShow] = useState(false);

    return (
        <div style={{ padding:20}}>
            <button onClick={() => setShow(!show)}>Show</button>
            {show && <App />}
        </div>
    )
}

export default content;