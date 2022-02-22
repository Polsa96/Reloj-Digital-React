import {NavLink} from 'react-router-dom';
import './Navbar.css'


export default function Navbar(){
    return(
        <nav>
            <NavLink to="" className={({isActive})=>(isActive ? 'active':'inactive')}>
                Clock
            </NavLink>
            <NavLink to="chronometer" className={({isActive})=>(isActive ? 'active':'inactive')}>
                Chronometer
            </NavLink>
            <NavLink to="countdown" className={({isActive})=>(isActive ? 'active':'inactive')}>
                Count Down
            </NavLink>
        </nav>
    )
}