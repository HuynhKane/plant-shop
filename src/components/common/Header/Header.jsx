import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import SearchButton from '../SearchButton/SearchButton'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="brand">
          SoiL Gardening
        </Link>
        <div className="header-row__actions">
          <SearchButton />
          <Navbar />
        </div>
      </div>
    </header>
  )
}
