import { Routes, Route } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout/MainLayout'
import HomePage from '../pages/HomePage/HomePage'
import CategoryPage from '../pages/CategoryPage/CategoryPage'
import ProjectPage from '../pages/ProjectPage/ProjectPage'
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage'
import ContactPage from '../pages/ContactPage/ContactPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:categoryId" element={<CategoryPage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
