import { Router, withContent } from 'itty-router'
import { RequestWithChat, withChat } from '~/middleware/withChat'

// NESTING CAVEAT: base path of subrouters must match full upstream path
// if registered under (e.g. /v1/*, then add Router({ base: '/v1' }) here)
export const router = Router()

router
  // example using POST
  .post<RequestWithChat>('/gpt', withContent, withChat,
    ({ chat, content }) =>
      chat
        .addMessage(content)
        .send()
        .then((r: any) => r?.choices?.[0].message.content)
  )
