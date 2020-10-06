import { ACTION_TYPES } from '../actions/university.actions'
import {REQUEST, FAILURE, SUCCESS} from "../action.type";
import {IUniversityModel} from "../models/IUniversityModel";
import {IFacultyModel} from "../models/IFacultyModel";
import {ICourseModel} from "../models/ICourseModel";

const initialState = {
  loading: false,
  universities: [] as ReadonlyArray<IUniversityModel>,
  faculties: [] as ReadonlyArray<IFacultyModel>,
  courses: [] as ReadonlyArray<ICourseModel>,
}

export type UniversityState = Readonly<typeof initialState>;

export default (state: UniversityState = initialState, action: any): UniversityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_UNIVERSITIES):
    case REQUEST(ACTION_TYPES.GET_FACULTIES):
    case REQUEST(ACTION_TYPES.GET_COURSES):
      return {
        ...state,
        loading: true,
      }
    case FAILURE(ACTION_TYPES.GET_UNIVERSITIES):
    case FAILURE(ACTION_TYPES.GET_FACULTIES):
    case FAILURE(ACTION_TYPES.GET_COURSES):
      return {
        ...state,
        loading: false,
      }
    case SUCCESS(ACTION_TYPES.GET_UNIVERSITIES):
      return {
        ...state,
        loading: false,
        universities: action.payload.data.data,
      }
    case SUCCESS(ACTION_TYPES.GET_FACULTIES):
      return {
        ...state,
        loading: false,
        faculties: action.payload.data.data,
      }
    case SUCCESS(ACTION_TYPES.GET_COURSES):
      return {
        ...state,
        loading: false,
        courses: action.payload.data.data,
      }
    default:
      return state;
  }
}