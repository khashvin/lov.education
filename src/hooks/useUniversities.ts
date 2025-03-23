import { fetchCourses, fetchFaculties, fetchUniversities, fetchUniversity } from '@/functions/fetch-universities'
import { useQuery } from '@tanstack/react-query'

export const useUniversities = () => {
  return useQuery({
    queryKey: ['universities'],
    queryFn: fetchUniversities,
    staleTime: Infinity,
    retry: false,
  })
}

export const useUniversity = (uniPath: string) => {
  return useQuery({
    queryKey: [`university-${uniPath}`],
    queryFn: () => fetchUniversity({ data: uniPath }),
    staleTime: Infinity,
    retry: false,
  })
}

export const useFaculties = (universityId: number) => {
  return useQuery({
    queryKey: [`faculties-university-${universityId}`],
    queryFn: () => fetchFaculties({ data: universityId }),
    staleTime: Infinity,
    retry: false,
  })
}

export const useCourses = (facultyId: number) => {
  return useQuery({
    queryKey: [`courses-faculty-${facultyId}`],
    queryFn: () => fetchCourses({ data: facultyId }),
    staleTime: Infinity,
    retry: false,
  })
}