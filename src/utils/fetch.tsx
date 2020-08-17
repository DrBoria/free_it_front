interface IFetchResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

export interface IRequestErrors extends Error {
  response?: IFetchResponse;
}

export interface ICustomHeaders extends Headers {
  clientid?: string;
  entitytype?: string;
  token?: string;
}

const checkStatus = async (response: IFetchResponse): Promise<IFetchResponse> => {
  if (response.ok) {
    return response;
  }
  const body = await response.json();
  const errorMessage = body.message || body.data?.error || body.error?.message || response.statusText;
  throw new Error(errorMessage);
};

export default async function fetchApi<Body>(
  url: string,
  headers: ICustomHeaders,
  method?: string,
  body?: any,
  statusChecker: (resp: Response) => Promise<IFetchResponse<Body>> = checkStatus,
): Promise<Body> {
  const userData = await fetch(`${url}`, {
    method: method || 'GET',
    headers,
    body: JSON.stringify(body),
  });
  await statusChecker(userData);
  return userData.json();
}
