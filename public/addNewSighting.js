import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"
import fs from "node:fs/promises"
import path from "node:path"

export const addNewSighting = async (res, statusCode, contentType, payload) => {
  try {
    const jsonDataPath = path.join("data", "data.json")

    const data = await getData()
    data.push(payload)
    const prettifyJson = JSON.stringify(data, null, 2)

    await fs.writeFile(jsonDataPath, prettifyJson, "utf-8")

  } catch (err) {
    throw new Error(err)
  }
}