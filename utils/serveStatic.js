import path from "node:path"

export const serveStatic = (baseDirectory) => {
  const filePath = path.join(baseDirectory, "public", "index.html")
  console.log(filePath)

  return filePath
}