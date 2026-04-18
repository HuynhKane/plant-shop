import { NavLink } from 'react-router-dom'
import { mainMenu } from '../../../data/menu'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="nav-links" aria-label="Điều hướng chính">
      {mainMenu.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
          end={item.to === '/'}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
