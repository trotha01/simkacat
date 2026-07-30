import { renderToStaticMarkup } from 'react-dom/server'
import App from './App'

// Static markup, not renderToString: the page has no interactive state, so the
// client createRoot in main.jsx simply re-renders over this at runtime and there
// is no hydration mismatch to reconcile. See scripts/prerender.mjs.
export function render() {
  return renderToStaticMarkup(<App />)
}
