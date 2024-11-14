import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div>
                <ul>
                    {/* Render all the components links */}
                    <li className='components'>
                        <Link to='/'>Home</Link>
                    </li>
                    {/* <li className='components'>
                        <Link to='/about'>About</Link>
                    </li> */}
                    <li className='components'>
                        <Link to='/new-contact'>New Contact</Link> {/* Fixed path */}
                    </li>
                    <li className='components'>
                        <Link to='/profile'>User  Profile</Link> {/* Fixed path */}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;