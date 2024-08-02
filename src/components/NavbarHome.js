import Login from "./Login";
import { useNavigate } from "react-router-dom";
import SiteLogo from '../site-logo.png';
import { Link } from "react-router-dom";

const NavbarHome = () => {
    const url = "http://localhost/kodego/jjc/jjc.php";
        // const [arr, setArr] = useState([]);
        const navigate = useNavigate();
 
        // useEffect(() => {
        //     if (sessionStorage.getItem('login')){
        //         axios.get(url).then((response)=>{
        //             setArr(response.data)
        //         });
        //     }else{
        //         navigate('/login');
        //     }
        // }, []);
    const Login = () => {
        navigate('/login');
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={SiteLogo} style={{width: "50px"}}/>Digital Agency</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/role-pricing">Roles & Pricing</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/booking">Book Now</Link>
                    </li>
                </ul>
                <span className="navbar-text" onClick={Login} style={{cursor:"pointer"}}>
                    Login
                </span>
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavbarHome;