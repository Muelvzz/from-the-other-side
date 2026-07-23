import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"
import { parseJsonBody } from "../utils/parseJsonBody.js"
import { addNewSighting } from "../public/addNewSighting.js"

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

  try {
    const parsedBody = await parseJsonBody(req)
    await addNewSighting(parsedBody)
    sendResponse(
      res, 
      201, 
      "application/json", 
      JSON.stringify(parseJsonBody)
    )
  } catch (err) {
    sendResponse(
      res,
      400,
      "application/json",
      JSON.stringify({ error: err.message })
    )
  }

}