import Logo from '../../assets/logo.png'
import './styles.css'
import { FaTh, FaSearch, FaMicrophone } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="header">
            <span><a href="/" style={{ display: "flex" }}><img src={Logo} alt="Our tube" className="header-logo" /><p className="ourtube" style={{ fontSize: "2vh" }}>OurTube</p></a></span>
            <nav className="">
                <form action="" >
                    <input type="text" placeholder="Search" />
                    <button type="submit" className="search-button"><FaSearch color="white" style={{ height: "10px" }}></FaSearch></button>
                    <button className="voice-button" style={{}}><FaMicrophone color="#6495ed" style={{ height: "19", }} /></button>
                </form>
            </nav>
            <div>
                <button>teste</button>
                <button> <FaTh /></button>
                <button>teste</button>
                <img src="https://yt3.ggpht.com/yti/ANoDKi40F-eJm0UVqlFx-suve0EG4IeI_Y9bx7jd_fRg=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className="profile-pic" />
            </div>
        </header>
    )
}