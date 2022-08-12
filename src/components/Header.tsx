import {Link, Outlet} from "react-router-dom";
import "../styles/Header.css"
import {createContext, useState} from "react";

export const UserContext = createContext('becker kadji')

function Header(){
    const [user, setUser] = useState('becker Kadji')
    return (
        <UserContext.Provider value={user}>
            <header className="color-white background-black text-upperCase">
                <div className="logoDiv"><Link to='/'><span className="text-large color-white">logo</span></Link></div>
                <nav>
                    <ul className='listStyle-none'>
                        <Link to="/"><li className='color-white'>Home</li></Link>
                        <Link to="/blogs"><li className='color-white'>Blog</li></Link>
                        <Link to="/contact"><li className='color-white'>Contact</li></Link>
                        <Link to="/todopage"><li className='color-white'>Todo</li></Link>
                        <li>{user}</li>
                    </ul>
                </nav>
            </header>

            <Outlet />
        </UserContext.Provider>
    )
}

export default Header