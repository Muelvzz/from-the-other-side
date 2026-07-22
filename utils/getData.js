import path from "node:path"
import fs from "node:fs/promises"

export const getData = async () => {

  try {

    const data = path.join("data", "data.json")
    const readData = await fs.readFile(data, "utf-8")
    return JSON.parse(readData)

  } catch (err) {
    console.log(err.message)
    return []
  }
  const jsonData = JSON.stringify(data)
}