import {IFileModel} from "./IFileModel";

export interface ICourseModel {
  id?: string;
  name?: string;
  file?: IFileModel;
}