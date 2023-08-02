# Cloudflare Worker Template - ChatGPT API

This is a simple template to set up a Worker with a minimal, CORS-enabled API with an endpoint 
for demonstrating communication with ChatGPT.  This is far from a feature complete API/implementation; consider it 
a barebones skeleton to get you started on your journey!

<3

## Requirements
1. [Obtain an OpenAI API key here](https://platform.openai.com/account/api-keys)
1. [Wrangler CLI should be installed](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

## Getting Started
1. Clone this repo
1. `npm install` (install the dependencies)
1. Rename `wrangler.toml.example` to `wrangler.toml`, and replace the placeholder values with your own.
1. With the OpenAI key copied to clipboard, run this: `wrangler secret put OPENAI_API_KEY` then paste the key.
1. You're ready to go!

## Commands
- `npm run dev` - launches dev mode to allow testing locally/in browser
- `wrangler publish` - publishes the Worker to Cloudflare

# Exposed API

### `POST /gpt`
Send a raw message (text or JSON encoded) to this endpoint, expecting the extracted response in reply.

Here's an example from the console (using [itty-fetcher](https://www.npmjs.com/package/itty-fetcher) for simplification):

![image](https://github.com/kwhitley/cloudflare-template-gpt/assets/865416/bdcdb98e-020b-4033-a4df-180a7c7370e8)
