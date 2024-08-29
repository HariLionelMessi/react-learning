import './Navbar.css'
import brain from './brain.svg'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 style={{ display: 'flex', gap: '5px', alignItems: 'center' }}> <img style={{ height: '30px' }} src={brain} /> SumZ</h2>
            <a href="#">Github</a>
        </nav>
    )
}

export default Navbar