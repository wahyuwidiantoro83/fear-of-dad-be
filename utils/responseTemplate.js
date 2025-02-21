export default function responseTemplate(
  response,
  code,
  success,
  message = "",
  result = null,
  additionalData = {}
) {
  return response.status(code).send({
    code,
    success,
    message,
    result,
    ...additionalData,
  });
}
