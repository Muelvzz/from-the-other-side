import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"

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