import {IFileModel} from "./IFileModel";

export interface IFacultyModel {
  id: number;
  name?: string;
  file?: IFileModel;
}