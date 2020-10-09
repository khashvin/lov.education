import { ACTION_TYPES } from '../actions/banner.actions';
import {REQUEST, FAILURE, SUCCESS} from "../action.type";
import {IBannerModel} from "../models/IBannerModel";

const initialState = {
  loading: false,
  banners: [] as ReadonlyArray<IBannerModel>,
}

export type BannerState = Readonly<typeof initialState>;

export default (state: BannerState = initialState, action: any): BannerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_BANNERS):
      return {
        ...state,
        loading: true,
      }
    case FAILURE(ACTION_TYPES.GET_BANNERS):
      return {
        ...state,
        loading: false,
      }
    case SUCCESS(ACTION_TYPES.GET_BANNERS):
      return {
        ...state,
        loading: false,
        banners: action.payload.data.data
      }
    default:
      return state;
  }
}