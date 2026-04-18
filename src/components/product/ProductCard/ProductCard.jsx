import { Link } from 'react-router-dom'
import ProductPrice from '../ProductPrice/ProductPrice'
import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <ProductPrice amount={product.price} />
      </div>
    </Link>
  )
}
