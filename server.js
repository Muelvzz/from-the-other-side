import http from "node:http"

import { serveStatic } from "./utils/serveStatic.js"
import { sendResponse } from "./utils/sendResponse.js"

import { handleGet, handlePost } from "./handler/routeHandlers.js"

const PORT = 8000
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

  if (req.url === "/api") {

    if (req.method === "GET") {
      return await handleGet(res)
    } else if (req.method === "POST") {
      return await handlePost(res, res)
    }

  }

  else if (!req.url.startsWith("/api")) {
    return await serveStatic(req, res, __dirname)
    }

  }
)

server.listen(PORT, () => console.log("Node server started."))