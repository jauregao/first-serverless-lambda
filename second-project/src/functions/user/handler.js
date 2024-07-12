import 'dotenv/config'
export async function create(event, context) {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-allow-Origin': '*'
    },
    body: JSON.stringify({
    })
  }

  return response
}