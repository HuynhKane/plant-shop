import ProductCard from '../../components/product/ProductCard/ProductCard'
import ProductGrid from '../../components/product/ProductGrid/ProductGrid'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle'
import { useProducts } from '../../hooks/useProducts'

export default function HomePage() {
  const products = useProducts()

  return (
    <section>
      <div className="hero">
        <div>
          <p className="eyebrow">Plant shop MVP</p>
          <h1>Website trưng bày sản phẩm cây cảnh</h1>
          <p className="hero-text">
            Bản khởi tạo UI 
          </p>
        </div>
      </div>

      <SectionTitle title="Danh sách sản phẩm" />

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </section>
  )
}
