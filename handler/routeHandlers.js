import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"
import { parseJsonBody } from "../utils/parseJsonBody.js"

export const handleGet = async (res) => {
  const data = await getData()
  const stringifiedData = JSON.stringify(data)
  sendResponse(
    res,
    200,
    "application/json",
    stringifiedData
  )
}

export const handlePost = async (req, res) => {
  const rawBody = await parseJsonBody(req)
  return rawBody
}