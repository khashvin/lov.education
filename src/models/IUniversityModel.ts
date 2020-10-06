import {IFileModel} from "./IFileModel";

export interface IUniversityModel {
  id?: string;
  path?: string;
  name?: string;
  abbr?: string;
  description?: string;
  intake?: string;
  location?: string;
  image?: IFileModel;
  thumbnail?: IFileModel;
}