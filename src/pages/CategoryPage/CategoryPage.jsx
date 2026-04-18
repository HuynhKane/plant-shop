import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb'
import ProductCard from '../../components/product/ProductCard/ProductCard'
import ProductGrid from '../../components/product/ProductGrid/ProductGrid'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import { categories } from '../../data/categories'
import { useProducts } from '../../hooks/useProducts'

export default function CategoryPage() {
  const { categoryId } = useParams()
  const products = useProducts()
  const category = categories.find((c) => c.id === categoryId)

  const crumbs = [
    { label: 'Trang chủ', to: '/' },
    { label: 'Danh mục', to: null },
    { label: category?.name ?? categoryId, to: null },
  ]

  if (!category) {
    return (
      <section className="empty-state">
        <h2>Không tìm thấy danh mục</h2>
        <Link to="/" className="primary-button">
          Về trang chủ
        </Link>
      </section>
    )
  }

  return (
    <section>
      <Breadcrumb items={crumbs} />
      <SectionTitle title={category.name} subtitle="Hiển thị toàn bộ sản phẩm demo cho danh mục này." />
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </section>
  )
}
