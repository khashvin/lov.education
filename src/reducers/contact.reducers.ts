import { ACTION_TYPES } from '../actions/contact.actions';
import {REQUEST, FAILURE, SUCCESS} from "../action.type";
import api from "../api";

const initialState = {
  loading: false,
  success: false,
  token: '',
}

export type ContactState = Readonly<typeof initialState>;

export default (state: ContactState = initialState, action: any): ContactState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_AUTH):
      return {
        ...state,
        loading: true,
      }
    case FAILURE(ACTION_TYPES.GET_AUTH):
      return {
        ...state,
        loading: false,
      }
    case SUCCESS(ACTION_TYPES.GET_AUTH):
      localStorage.setItem("token", action.payload.data.data.token);
      api.defaults.headers[
        "Authorization"
        ] = `Bearer ${action.payload.data.data.token}`;
      return {
        ...state,
        loading: false,
        token: action.payload.data.data.token,
      }
    case REQUEST(ACTION_TYPES.SEND_CONTACTFORM):
      return {
        ...state,
        loading: true,
        success: false,
      }
    case FAILURE(ACTION_TYPES.SEND_CONTACTFORM):
      return {
        ...state,
        loading: false,
        success: false,
      }
    case SUCCESS(ACTION_TYPES.SEND_CONTACTFORM):
      return {
        ...state,
        loading: false,
        success: true,
      }
    case ACTION_TYPES.CLOSE_SUCCESSMSG:
      return {
        ...state,
        success: false,
      }
    default:
      return state;
  }
}