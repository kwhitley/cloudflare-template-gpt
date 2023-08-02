import { withGlobalEnv } from '@middleware/withGlobalEnv'
import { version } from '@root/package.json'
import {
  Router,
  createCors,
  error,
  json,
  withParams,
} from 'itty-router'
import { router as api } from './api'

// create CORS middleware and response handler
const { preflight, corsify } = createCors({
  methods: ['GET', 'POST'],
})

// create a basic router
const router = Router()

// register core routes, including nested API router
router
  .all('*', withGlobalEnv, withParams, preflight)           // add global middleware
  .get('/version', () => json({ version }))                 // GET API version number
  .all('*', api.handle)                                     // register API router
  .all('*', () => error(404, 'Are you sure about that?'))   // 404 for all else

// export default { fetch } for Cloudflare Workers
export default {
  fetch: (request, env, context) => router
                        .handle(request, env, context)      // pass cloudflare vars to handle
                        .then(json)                         // turn unformed responses to JSON
                        .catch(error)                       // catch any errors
                        .then(corsify),                     // finally add CORS headers
}
