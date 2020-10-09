export interface IMailModel {
  to?: IMailTo;
  subject?: string;
  body?: string;
  type?: string;
  data?: any;
}

interface IMailTo {
  email: string;
  name: string;
}