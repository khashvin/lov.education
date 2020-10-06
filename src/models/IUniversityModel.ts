import {IFileModel} from "./IFileModel";

export interface IUniversityModel {
  id: number;
  path?: string;
  name?: string;
  abbr?: string;
  description?: string;
  intake?: string;
  location?: string;
  image?: IFileModel;
  thumbnail?: IFileModel;
}