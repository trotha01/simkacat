// Injects the server-rendered homepage markup into dist/index.html.
//
// The site is a client-rendered SPA, but most AI/answer-engine crawlers
// (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) do not execute JavaScript.
// Without this step they see an empty <div id="root"> and none of the page copy.
//
// Run after both Vite passes:
//   vite build && vite build --ssr src/entry-server.jsx --outDir dist-ssr
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const indexPath = resolve(root, 'dist/index.html')
const ssrEntry = resolve(root, 'dist-ssr/entry-server.js')

const { render } = await import(pathToFileURL(ssrEntry).href)
const appHtml = render()

const template = await readFile(indexPath, 'utf8')
const marker = '<div id="root"></div>'

if (!template.includes(marker)) {
  throw new Error(`prerender: could not find ${marker} in dist/index.html`)
}

await writeFile(indexPath, template.replace(marker, `<div id="root">${appHtml}</div>`))

console.log(`prerender: injected ${appHtml.length} bytes of markup into dist/index.html`)
