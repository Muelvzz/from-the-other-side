import path from "node:path"
import fs from "node:fs/promises"
import { sendResponse } from "./sendResponse.js"
import { getContentType } from "./getContentType.js"

export const serveStatic = async (req, res, baseDirectory) => {
  const filePath = path.join(
    baseDirectory, 
    "public",
    req.url === "/" ? "index.html": req.url
  )
  let ext = path.extname(filePath)

  try {
    const contentType = getContentType(ext)
    const content = await fs.readFile(filePath)

    sendResponse(res, 200, contentType, content)
  } catch (err) {
    if (err.code === "ENOENT") {
      const content = await fs.readFile(
        path.join(
          baseDirectory,
          "public",
          "404.html"
        )
      )
      sendResponse(res, 404, "text/html", content)
    } else {
      sendResponse(
        res,
        500,
        "text/html",
        `<html>
          <h1>Server error: ${err.code}</h1>
        </html>`
      )
    }
  }
}