import './SearchButton.css'

export default function SearchButton({ onClick, label = 'Tìm kiếm' }) {
  return (
    <button type="button" className="search-button" onClick={onClick}>
      {label}
    </button>
  )
}
