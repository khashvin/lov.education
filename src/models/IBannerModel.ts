import {IFileModel} from "./IFileModel";

export interface IBannerModel {
  id: number;
  banner: IFileModel;
  name?: string
}