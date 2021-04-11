import Logo from '../../assets/logo.png'
import './styles.css'
import { FaSearch } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="header">
            <span><img src={Logo} alt="Our tube" className="header-logo" /></span>
            <nav className="">
                <form action="" >
                    <input type="text" placeholder="Search" />
                    <button type="submit" className="search-button"><FaSearch color="white" style={{ height: "10px" }}></FaSearch></button>
                </form>
            </nav>
            <div>
                another options
            </div>
        </header>
    )
}