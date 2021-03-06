import { post } from 'utils/post'

const postMockFn = jest.fn()
window.fetch = postMockFn // window object coming from DOM
const host = 'localhost'
const port = 1234
const url = `http://${host}:${port}/post-endpoint`

describe('Http util', () => {
  test('Post request', async () => {
    const expectedValue = { ok: true, status: 200 }
    postMockFn.mockResolvedValueOnce(makeResponse(expectedValue))
    const payload = 'hello'
    const response = await post(host, port, payload)

    expect(window.fetch).toBeCalledWith(url, makeRequest(payload))
    expect(response).toEqual(expectedValue)
  })

  test('Post throws error', async () => {
    postMockFn.mockResolvedValueOnce(makeErrorResponse())
    const payload = 'hello'

    await expect(post(host, port, payload)).rejects.toThrow(Error)
    expect(window.fetch).toBeCalledWith(url, makeRequest(payload))
  })
})

function makeResponse<T>(response: T): Response {
  return new Response(JSON.stringify(response))
}

function makeErrorResponse(): Response {
  return new Response('', { status: 404, statusText: 'bad request' })
}

function makeRequest(request: string) {
  return {
    method: 'POST',
    headers: new Headers([['Content-Type', 'application/json']]),
    body: JSON.stringify(request)
  }
}
