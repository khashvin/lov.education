import {
  fetchCourses,
  fetchFaculties,
  fetchUniversities,
  fetchUniversity,
} from '@/functions/fetch-universities';
import { queryOptions } from '@tanstack/react-query';

export const getUniversitiesOptions = queryOptions({
  queryKey: ['universities'],
  queryFn: fetchUniversities,
  staleTime: Infinity,
  retry: false,
});

export const getUniversityOptions = (uniPath: string) =>
  queryOptions({
    queryKey: [`university-${uniPath}`],
    queryFn: () => fetchUniversity({ data: uniPath }),
    staleTime: Infinity,
    retry: false,
  });

export const getFacultiesOptions = (universityId: number) =>
  queryOptions({
    queryKey: [`faculties-university-${universityId}`],
    queryFn: () => fetchFaculties({ data: universityId }),
    staleTime: Infinity,
    retry: false,
  });

export const getCoursesOptions = (facultyId: number) =>
  queryOptions({
    queryKey: [`courses-faculty-${facultyId}`],
    queryFn: () => fetchCourses({ data: facultyId }),
    staleTime: Infinity,
    retry: false,
  });
