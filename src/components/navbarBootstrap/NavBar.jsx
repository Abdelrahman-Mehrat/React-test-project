import { Link } from "react-router-dom";
function NavBarRoute(){
    return(
        <ul className="d-flex list-unstyled justify-content-center">
            <li className="mx-2"><Link to="/" className="p-2">Home</Link></li>
            <li className="mx-2"><Link to="/counterContent" className="p-2">Counter</Link></li>
            <li className="mx-2"><Link to="/shop" className="p-2">Shop</Link></li>
        </ul>
    )
}
export default NavBarRoute;