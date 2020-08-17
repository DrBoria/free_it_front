import { ICustomHeaders } from './fetch';

export default (): ICustomHeaders => {
  const headers: ICustomHeaders = new Headers();
  headers.set('Accept', 'application/json');
  headers.set('Content-Type', 'application/json');
  return headers;
};
