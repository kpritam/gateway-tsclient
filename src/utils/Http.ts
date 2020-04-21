import * as fetchPonyfill from 'fetch-ponyfill'
const { fetch, Headers } = fetchPonyfill()

type RequestConfig = {
  url: string
  method: string
  headers: Headers
  body: string
}

const post = async <T>(hostname: string, port: number, payload: any): Promise<T> => {
  const url = `http://${hostname}:${port}/post-endpoint`
  return clientFetch(url, payload, 'POST')
}

const headers = new Headers([['Content-Type', 'application/json']])

const setHeaders = (_headers: Headers) => {
  _headers.forEach((k: string, v: string) => headers.set(k, v))
}

const handleErrors = (res: any) => {
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res
}

const clientFetch = async <T>(url: string, payload: any, method: 'POST' | 'GET'): Promise<T> => {
  const request: RequestConfig = {
    url,
    method,
    headers,
    body: JSON.stringify(payload),
  }

  return new Promise((resolve, reject) =>
    fetch(url, request)
      .then(handleErrors)
      .then(async (response) => resolve(await response.json()))
      .catch((e) => reject(new Error(e.message))),
  )
}

export const Http = { post }