"use client"

import { fetcher, fetcherParams } from "@/lib/fetcher"
import useSWR from 'swr'

export const useAllProducts = () => {
    const { data, error, isLoading } = useSWR(`/api/products/all-products`, fetcher)
   
    return {
      products: data,
      isLoading,
      isError: error
    }
  }

  export const useProductById = ({id, options}) => {
    const { data, error,isLoading, isValidating } = useSWR(`/api/products/product-id?id=${id}`, {
      ...options,
      fetcher,
    });
  
    return {
      product: data,
      isLoading,
      isError: error,
      isValidating
    }
  }

  