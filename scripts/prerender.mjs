// Runs after `vite build`: server-renders <App/> to a string and bakes it into
// dist/index.html so crawlers that don't execute JS still see real content.
import { execSync } from "node:child_process"
import { readFileSync, writeFileSync, rmSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const ssrOutDir = path.join(root, "dist-ssr")

execSync(`npx vite build --ssr src/entry-server.tsx --outDir dist-ssr`, {
  cwd: root,
  stdio: "inherit",
})

const { render } = await import(path.join(ssrOutDir, "entry-server.js"))
const appHtml = render()

const indexPath = path.join(root, "dist", "index.html")
const html = readFileSync(indexPath, "utf-8")
const injected = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
writeFileSync(indexPath, injected)

rmSync(ssrOutDir, { recursive: true, force: true })

console.log("Prerendered content injected into dist/index.html")
