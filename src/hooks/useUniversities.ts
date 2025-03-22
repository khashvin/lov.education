import { fetchUniversities } from '@/functions/fetch-universities'
import { useQuery } from '@tanstack/react-query'

export const useUniversities = () => {
  return useQuery({
    queryKey: ['universities'],
    queryFn: fetchUniversities,
    staleTime: Infinity,
    retry: false,
  })
}