import { Router, withContent } from 'itty-router'
import { RequestWithChat, withChat } from '~/middleware/withChat'

// NESTING CAVEAT: base path of subrouters must match full upstream path
// if registered under (e.g. /v1/*, then add Router({ base: '/v1' }) here)
export const router = Router()

router
  .post<RequestWithChat>('/gpt', withContent, withChat,
    ({ chat, content }) => chat.send(content)
  )
