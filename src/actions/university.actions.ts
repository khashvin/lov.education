import api from '../api';

export const ACTION_TYPES = {
  GET_UNIVERSITIES: "GET_UNIVERSITIES",
  GET_FACULTIES: "GET_FACULTIES",
  GET_COURSES: "GET_COURSES",
}

const universityEndpoint = 'items/university';
const universityFilter = 'filter[enable][eq]=1';
const universityFields = 'fields=id,path,name,abbr,description,intake,location,image.data,thumbnail.data'

const facultyEndpoint = 'items/faculty';
const facultyFilter = 'filter[enable][eq]=1';
const facultyFilterByUni = 'filter[university][eq]='
const facultyFields = 'fields=id,name,file.data';

const courseEndpoint = 'items/course';
const courseFilter = 'filter[enable][eq]=1';
const courseFilterByFac = 'filter[faculty][eq]='
const courseFields = 'fields=id,name,file.data,faculty';

export const getUniversities = () => {
  return {
    type: ACTION_TYPES.GET_UNIVERSITIES,
    payload: api.get(`${universityEndpoint}?${universityFilter}&${universityFields}`),
  }
}

export const getFaculties = (uni: number) => {
  return {
    type: ACTION_TYPES.GET_FACULTIES,
    payload: api.get(`${facultyEndpoint}?${facultyFilter}&${facultyFilterByUni}${uni}&${facultyFields}`),
  }
}


export const getCourses = (faculty: number) => {
  return {
    type: ACTION_TYPES.GET_COURSES,
    payload: api.get(`${courseEndpoint}?${courseFilter}&${courseFilterByFac}${faculty}&${courseFields}`),
    meta: {
      facultyId: faculty,
    }
  }
}