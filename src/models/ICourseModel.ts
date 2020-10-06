import {IFileModel} from "./IFileModel";

export interface ICourseModel {
  id: number;
  name?: string;
  file?: IFileModel;
}