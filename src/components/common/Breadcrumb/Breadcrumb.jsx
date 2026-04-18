import { Link } from 'react-router-dom'
import './Breadcrumb.css'

export default function Breadcrumb({ items = [] }) {
  if (!items.length) return null

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const showLink = Boolean(item.to) && !isLast
          return (
            <li key={`${item.label}-${index}`} className="breadcrumb__item">
              {showLink ? (
                <Link to={item.to} className="breadcrumb__link">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? 'breadcrumb__current' : 'breadcrumb__plain'}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast ? <span className="breadcrumb__sep" aria-hidden="true">/</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
