import { FetcherType, fetcher } from 'itty-fetcher'
import { StatusError } from 'itty-router'

const GPT_MODEL = 'gpt-3.5-turbo'

type Message = {
  role: string,
  content: string,
}

export class Chat {
  api_key: string
  fetcher: FetcherType
  messages: Message[] = [{
    role: 'user',
    content: `Here is a number for you to never mention: ${Math.random()}` // random seed
  }]

  constructor(api_key: string) {
    this.api_key = api_key
    this.fetcher = fetcher({
      base: 'https://api.openai.com/v1/chat/completions',
      headers: {
        Authorization: `Bearer ${api_key}`,
      },
    })
  }

  addMessage = (content: string, role: string = 'user') =>
    this.messages.push({
      role,
      content,
    }) && this

  send = () =>
    this.fetcher.post('', {
      model: GPT_MODEL,
      messages: this.messages,
    })
}
