import api from '../api';

export const ACTION_TYPES = {
  GET_UNIVERSITIES: "GET_UNIVERSITIES",
  GET_FACULTIES: "GET_FACULTIES",
  GET_COURSES: "GET_COURSES",
}

const universityEndpoint = 'university';
const universityFilter = 'filter[enable][eq]=1';
const universityFields = 'fields=id,path,name,abbr,description,intake,location,image.data,thumbnail.data'

const facultyEndpoint = 'faculty';
const facultyFilter = 'filter[enable][eq]=1';
const facultyFields = 'fields=id,name,file.data';

const courseEndpoint = 'course';
const courseFilter = 'filter[enable][eq]=1';
const courseFields = 'fields=id,name,file.data';

export const getUniversities = () => {
  return {
    type: ACTION_TYPES.GET_UNIVERSITIES,
    payload: api.get(`${universityEndpoint}?${universityFilter}&${universityFields}`),
  }
}

export const getFaculties = () => {
  return {
    type: ACTION_TYPES.GET_FACULTIES,
    payload: api.get(`${facultyEndpoint}?${facultyFilter}&${facultyFields}`),
  }
}


export const getCourses = () => {
  return {
    type: ACTION_TYPES.GET_COURSES,
    payload: api.get(`${courseEndpoint}?${courseFilter}&${courseFields}`),
  }
}