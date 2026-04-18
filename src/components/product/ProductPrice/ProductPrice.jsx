import { formatPrice } from '../../../utils/formatPrice'

export default function ProductPrice({ amount, className = 'product-price' }) {
  return <p className={className}>{formatPrice(amount)}</p>
}
