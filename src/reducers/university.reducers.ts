import { ACTION_TYPES } from '../actions/university.actions';
import {REQUEST, FAILURE, SUCCESS} from "../action.type";
import {IUniversityModel} from "../models/IUniversityModel";
import {IFacultyModel} from "../models/IFacultyModel";
import {ICourseModel} from "../models/ICourseModel";

const initialState = {
  uLoading: false,
  fLoading: false,
  cLoading: false,
  universities: [] as ReadonlyArray<IUniversityModel>,
  faculties: [] as ReadonlyArray<IFacultyModel>,
  courses: [] as ReadonlyArray<ICourseModel>,
  coursesStore: new Map<number, ICourseModel[]>() as Map<number, ICourseModel[]>,
}

export type UniversityState = Readonly<typeof initialState>;

export default (state: UniversityState = initialState, action: any): UniversityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_UNIVERSITIES):
      return {
        ...state,
        uLoading: true,
      }
    case REQUEST(ACTION_TYPES.GET_FACULTIES):
      return {
        ...state,
        fLoading: true,
      }
    case REQUEST(ACTION_TYPES.GET_COURSES):
      return {
        ...state,
        cLoading: true,
      }
    case FAILURE(ACTION_TYPES.GET_UNIVERSITIES):
      return {
        ...state,
        uLoading: false,
      }
    case FAILURE(ACTION_TYPES.GET_FACULTIES):
      return {
        ...state,
        fLoading: false,
      }
    case FAILURE(ACTION_TYPES.GET_COURSES):
      return {
        ...state,
        cLoading: false,
      }
    case SUCCESS(ACTION_TYPES.GET_UNIVERSITIES):
      return {
        ...state,
        uLoading: false,
        universities: action.payload.data.data,
      }
    case SUCCESS(ACTION_TYPES.GET_FACULTIES):
      return {
        ...state,
        fLoading: false,
        faculties: action.payload.data.data,
      }
    case SUCCESS(ACTION_TYPES.GET_COURSES):
      return {
        ...state,
        cLoading: false,
        courses: action.payload.data.data,
        coursesStore: state.coursesStore.set(
          action.meta.facultyId,
          action.payload.data.data
        )
      }
    default:
      return state;
  }
}