import { Link, useParams } from 'react-router-dom'
import QRCode from 'react-qr-code'
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb'
import ProductPrice from '../../components/product/ProductPrice/ProductPrice'
import { useProduct } from '../../hooks/useProducts'

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = useProduct(id)

  const crumbs = product
    ? [
        { label: 'Trang chủ', to: '/' },
        { label: 'Sản phẩm', to: '/' },
        { label: product.name, to: null },
      ]
    : []

  if (!product) {
    return (
      <section className="empty-state">
        <h2>Không tìm thấy sản phẩm</h2>
        <Link to="/" className="primary-button">
          Quay lại danh sách
        </Link>
      </section>
    )
  }

  const qrValue = `https://your-vercel-domain.vercel.app/product/${product.id}`

  return (
    <section className="detail-layout">
      <div>
        <Breadcrumb items={crumbs} />
        <img src={product.imageUrl} alt={product.name} className="detail-image" />
      </div>

      <div className="detail-content">
        <p className="eyebrow">Chi tiết sản phẩm</p>
        <h1>{product.name}</h1>
        <ProductPrice amount={product.price} className="detail-price" />
        <p className="detail-description">{product.description}</p>

        <div className="qr-box">
          <QRCode value={qrValue} size={140} />
          <p>Quét QR để mở nhanh trang sản phẩm.</p>
        </div>

        <a href={product.contactLink} target="_blank" rel="noreferrer" className="primary-button">
          Liên hệ ngay
        </a>
      </div>
    </section>
  )
}
