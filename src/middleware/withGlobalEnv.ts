import { IRequest } from 'itty-router'
import { Environment, env } from '~/env'

// MIDDLEWARE: embeds Cloudflare Environment into globally accessible env
export const withGlobalEnv = (request: IRequest, cf_env: Environment) => {
  Object.assign(env, cf_env)
}


