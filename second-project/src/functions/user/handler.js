export async function create(event, context) {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-allow-Origin': '*'
    },
    body: JSON.stringify({
      message: `${process.env.TEST_VAR}`,
      test_var_fs: `${process.env.TEST_VAR_FS}`
    })
  }

  return response
}