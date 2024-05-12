"use client"

import { fetcher } from "@/lib/fetcher"
import useSWR from 'swr'


export const useAllCategories= ({options}) => {
    const { data, error, isLoading ,mutate} = useSWR(`/api/categories/all-categories`, {...options, fetcher})
   
    return {
      categories: data,
      isLoading,
      isError: error,
      mutate,
    }
  }

  
  export const useCategoryById = ({id, options}) => {
    const { data, error,isLoading, isValidating } = useSWR(`/api/categories/category-id?id=${id}`, {
      ...options,
      fetcher,
    });
 
    return {
      category: data,
      isLoading,
      isError: error,
      isValidating
    }
  }