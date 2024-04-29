import './style.scss'
import { context } from '../../store';
import { useContext } from 'react';
function Welcome() {
    const {store, setStore} = useContext(context)
    return ( 
        <>
        <div className="welcome-container">
            <div className="welcome"></div>
        </div>
        </>
     );
}

export default Welcome;