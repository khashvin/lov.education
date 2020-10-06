import { combineReducers } from "redux";
import preloader, {PreloaderState} from "./reducers/preloader.reducers";
import university, {UniversityState} from "./reducers/university.reducers";

export interface IRootState {
    readonly preloader: PreloaderState;
    readonly university: UniversityState;
}

export default combineReducers<IRootState>({
  preloader,
  university,
})