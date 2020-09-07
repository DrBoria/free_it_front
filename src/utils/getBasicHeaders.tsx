import { ICustomHeaders } from './fetch';

export const headers: ICustomHeaders = new Headers();

export default (): ICustomHeaders => {
  headers.set('Accept', 'application/json');
  headers.set('Content-Type', 'application/json');
  return headers;
};
