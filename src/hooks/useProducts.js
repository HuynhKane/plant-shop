import { useMemo } from 'react'
import { getProducts, getProductById } from '../services/productService'

export function useProducts() {
  return useMemo(() => getProducts(), [])
}

export function useProduct(id) {
  return useMemo(() => (id ? getProductById(id) : null), [id])
}
