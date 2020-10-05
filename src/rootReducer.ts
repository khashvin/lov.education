import { combineReducers } from "redux";
import preloader, {PreloaderState} from "./reducers/preloader.reducers";

export interface IRootState {
    readonly preloader: PreloaderState;
}

export default combineReducers<IRootState>({
  preloader,
})