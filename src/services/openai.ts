import { FetcherType, fetcher } from 'itty-fetcher'
import { StatusError } from 'itty-router'

const GPT_MODEL = 'gpt-3.5-turbo'

export class Chat {
  api_key: string
  fetcher: FetcherType

  constructor(api_key: string) {
    this.api_key = api_key

    this.fetcher = fetcher({
      base: 'https://api.openai.com/v1/chat/completions',
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
      handleResponse: async (response) => {
        let body: string | undefined | Record<any, string> = undefined

        try {
          if (response?.headers?.get('content-type')?.includes('json')) {
            body = await response.json()
          } else {
            body = await response.text()
          }
        } catch (err) {
          body = await response.text()
        }

        if (response.ok) return body

        console.log('Error', body)

        const error = new StatusError(response.status, response.statusText)
        // @ts-expect-error - adding data to StatusError
        error.details = body?.error

        throw error
      },
    })
  }

  send(content: string) {
    return this.fetcher.post('', {
      model: GPT_MODEL,
      messages: [
        {
          role: 'user',
          content,
        }
      ]
    })
  }
}
