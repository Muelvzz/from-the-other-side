import sanitizeHtml from "sanitize-html"

export const sanitizeInput = (data) => {

  const sanitizedData = {}

  for (const [key, value] of Object.entries(sanitizedData)) {
    if (typeof value === "string") {
      sanitizedData[key] = sanitizeHtml(
        value,
        {
          allowedTags: ["b"],
          allowedAttributes: {}
        }
      )
    } else {
      sanitizedData[key] = value
    }
  }

  return sanitizedData

}