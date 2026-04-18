import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="empty-state">
      <h1>404</h1>
      <p>Trang bạn tìm không tồn tại.</p>
      <Link to="/" className="primary-button">
        Về trang chủ
      </Link>
    </section>
  )
}
