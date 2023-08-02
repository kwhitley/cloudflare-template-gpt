import { IRequest } from 'itty-router'
import { env } from '~/env'
import { Chat } from '~/services/openai'

export type RequestWithChat = {
  chat: Chat
} & IRequest

// MIDDLEWARE: embeds chat instance into request
export const withChat = (request: IRequest) => {
  request.chat = new Chat(env.OPENAI_API_KEY)
}
