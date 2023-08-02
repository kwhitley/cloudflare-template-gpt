# Cloudflare Worker Template - ChatGPT API

This is a simple template to set up a Worker with a minimal, CORS-enabled API with an endpoint 
for demonstrating communication with ChatGPT.

## Requirements
1. [Obtain an OpenAI API key here](https://platform.openai.com/account/api-keys)
1. From console:
  ```bash
  wrangler
  ```

## Getting Started
1. Clone this repo
1. `npm install` (install the dependencies)
1. Rename `wrangler.toml.example` to `wrangler.toml`, and replace the placeholder values with your own.
1. With the OpenAI key copied to clipboard, run this: `wrangler secret put OPENAI_API_KEY` then paste the key.
1. You're ready to go!

## Commands
- `npm run dev` - launches dev mode to allow testing locally/in browser
- `wrangler publish` - publishes the Worker to Cloudflare

