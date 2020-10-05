import { ACTION_TYPES } from '../actions/preloader.actions'

const initialState = {
  loading: false,
}

export type PreloaderState = Readonly<typeof initialState>;

export default (state: PreloaderState = initialState, action: any): PreloaderState => {
  switch (action.type) {
    case ACTION_TYPES.START_PRELOADER:
      return {
        loading: true
      }
    case ACTION_TYPES.STOP_PRELOADER:
      return {
        loading: false
      }
    default:
      return state;
  }
}