import { Link } from '@reach/router';


const NavBar = () => {
    return ( 
        <div>
            <h1>Doshinkan Aikido</h1>
            <p><Link to="/students/create">Add Doshinkan Student</Link></p>
        </div>
    );
}
 
export default NavBar;