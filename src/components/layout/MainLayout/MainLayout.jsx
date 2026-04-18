import { Outlet } from 'react-router-dom'
import TopBar from '../../common/TopBar/TopBar'
import Header from '../../common/Header/Header'
import './MainLayout.css'

export default function MainLayout() {
  return (
    <div className="app-shell main-layout">
      <TopBar />
      <Header />

      <main className="container main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">© 2026 Green Corner</div>
      </footer>
    </div>
  )
}
