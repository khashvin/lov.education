import { combineReducers } from "redux";
import preloader, {PreloaderState} from "./reducers/preloader.reducers";
import university, {UniversityState} from "./reducers/university.reducers";
import contact, {ContactState} from "./reducers/contact.reducers";
import banner, {BannerState} from "./reducers/banner.reducers";

export interface IRootState {
    readonly preloader: PreloaderState;
    readonly university: UniversityState;
    readonly contact: ContactState;
    readonly banner: BannerState;
}

export default combineReducers<IRootState>({
  preloader,
  university,
  contact,
  banner,
})